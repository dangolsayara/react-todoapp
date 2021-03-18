import React from 'react'
import Todo from './Todo'
const TodoList = ({todos,setTodos}) => {
    return (
        <div class="todo-container">
            <ul class="todo-list">
            {todos.map((todo)=>(
                <Todo 
                 setTodos={setTodos} 
                 todos={todos} 
                 key={todo.id} 
                 todo={todo} 
                 text={todo.text} 
                 />
                ))}
                </ul>
        </div>
    )
}

export default TodoList