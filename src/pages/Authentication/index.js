import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import Login from './Login'

export default function index() {
  return (
    <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forget-password' element={<ForgetPassword />} />
    </Routes>
  )
}
