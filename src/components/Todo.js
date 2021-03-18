import React from 'react'

const Todo = ({text,todo,todos,setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el=> el.id !== todo.id));
        // console.log(todo);
    }
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={deleteHandler} className="trash-btn" >
               delete
            </button>
        </div>
    );
}

export default Todo
