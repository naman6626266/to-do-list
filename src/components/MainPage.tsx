import React from 'react';
import Navbar from './Navbar'
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const MainPage = () => {
  return (
    <>
    <Navbar/>
    <TodoForm/>
    <TodoList/>
    </>
  )
}

export default MainPage