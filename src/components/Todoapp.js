import React ,{useState}from 'react'
import Form from './Form'
import TodoList from './TodoList';

function Todoapp() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  return (
  <>
          <Form todos={todos} setTodos={setTodos}  inputText={inputText} setInputText={setInputText}/>
          <TodoList todos={todos} setTodos={setTodos}/> 
    </>   
  )}

export default Todoapp;
