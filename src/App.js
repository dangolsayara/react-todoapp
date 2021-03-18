import React,{useState}from 'react'
import Form from './components/Form'
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);

  return (
    <div className="App">
    <Form todos={todos} setTodos={setTodos}  inputText={inputText} setInputText={setInputText}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
