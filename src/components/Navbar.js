import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
          <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
            <Link to="/about">
              <li className="nav-li">About</li>
            </Link>
            <Link to="/contact">
              <li className="nav-li">Contact</li>
            </Link>
            </ul>
          </nav>
    </div>
  );
}

export default Nav;
