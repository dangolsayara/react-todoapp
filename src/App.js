import React ,{useState}from 'react'

import Nav from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import {BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import './App.css';


function App() {
  // const [inputText,setInputText]=useState("");
  // const [todos,setTodos]=useState([]);
  return (
    <Router>
        <div className="App">
      <Nav/>
           <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
          {/* <Form todos={todos} setTodos={setTodos}  inputText={inputText} setInputText={setInputText}/>
          <TodoList todos={todos} setTodos={setTodos}/>  */}
        </div>
    </Router>
  );
}



export default App;
