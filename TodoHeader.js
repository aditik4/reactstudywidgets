import PropTypes from 'prop-types'
import Button from './Button'
import TodoList from './TodoList'
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'
const TodoHeader = ({title}) => {
  const [todos, setTodos] = useState([])
  const todonameref = useRef()
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  function handleAddTodo(e) {
    const name = todonameref.current.value
    if(name === '') {
      return
    }
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todonameref.current.value = null
  }
  function handleClearTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
    return (
        <header className = 'header'>
            <center><h1> {title}</h1></center>
           <TodoList todos = {todos} toggleTodo = {toggleTodo} />
           <center><input ref = {todonameref} type = "text" style={{
            width: "70%",
            margin: "10px",
            paddingTop: "12px",
            paddingBottom: "10px",
            paddingLeft: "5px"
            }}/>
            <Button onClick = {handleAddTodo} text = "Add Todo" color = 'OliveDrab'></Button>
            <Button onClick = {handleClearTodo} text = "Clear Done" color = 'PaleVioletRed'></Button>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div></center>
        </header>
    )
}


TodoHeader.defaultProps = {
    title: 'Task Tracker',

}
TodoHeader.propTypes= {
    title: PropTypes.string,

}

export default TodoHeader
