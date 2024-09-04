import React from "react"
import TodoInput from "./components/TodoInput"
import { useSelector } from "react-redux"
import TodoList from "./components/TodoList";

function App() {

  return (
    <>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList/>
    </>
  )
}

export default App
