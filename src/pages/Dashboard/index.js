import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Cart from '../Cart'


export default function index() {
  return (
    <>
    <Routes>
        <Route index element={<Dashboard />} />
        <Route index element={<Cart />} />
    </Routes>
    </>
  )
}
