import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodoActionCreator, toggleTodoActionCreator } from '../redux/actions/todoActions';

const TodoItem = ({ id, text, isCompleted }) => {

    const dispatch = useDispatch();

    function removeTodo(){
        dispatch(removeTodoActionCreator(id))
    }

    function toggleTodo() {
        dispatch(toggleTodoActionCreator(id))
    }

  return (
    <div className='todo-item'>
        <input type='checkbox' onChange={toggleTodo} checked={isCompleted} />
        <p> {text} </p>
        <button onClick={removeTodo}>x</button>
    </div>
  )
}

export default TodoItem;