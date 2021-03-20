import React ,{useState,useEffect} from 'react'

function Contact() {
  useEffect(()=>{
    fetchResult();
  },[]);

  const[first,setFirst]=useState([]);

 const fetchResult = async()=>{
   const data = await fetch(
     'https://api.randomuser.me/'
   );

   const first=await data.json();
   console.log(first.first);
   setFirst(first.first )
 };
  return (

    <div>
        <h1>Contact Page</h1>
    </div>
  );
}

export default Contact;
