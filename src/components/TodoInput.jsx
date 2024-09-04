import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoActionCreator } from '../redux/actions/todoActions'

const TodoInput = () => {

    const dispatch = useDispatch();  //this dispatch function is already connected to store

    const [todo, setTodo] = useState("")

    function addToDoToStore() {
        dispatch(addTodoActionCreator(todo))
    }

  return (
    <div>
        <input type='text' onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button onClick={addToDoToStore}>Add todo....</button>
    </div>
  )
}

export default TodoInput