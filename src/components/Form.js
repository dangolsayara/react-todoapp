import React from 'react'


const Form = ({setInputText,todos,setTodos,inputText}) => {

  const inputHandler=(e)=>{
    setInputText(e.target.value);

  };

  const submitHandler=(e)=>{
    e.preventDefault();
    setTodos([
      ...todos,{text:inputText,completed:false, id:Math.random()*1000}
    ]);
    setInputText("");
  }
    return (
        <div>
          <form >
          <input  value={inputText} type="text" placeholder="Add your task" onChange={inputHandler}/>
            <button onClick={submitHandler} type="submit" >Add</button>
          </form>  
        </div>
    )
}

export default Form
