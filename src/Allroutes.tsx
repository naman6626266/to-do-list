import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import MainPage from './components/MainPage'

export default function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/MainPage" element={<MainPage/>}></Route>
    </Routes>
  )
}
