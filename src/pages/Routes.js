import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontend from './Frontend';
import Authentication from './Authentication';
import Dashboard from './Dashboard';
import Login from './Authentication/Login/Login';
import PrivateRoute from '../important/PrivateRoute';
import Cart from './Cart';


export default function index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='authentication/*' element={<Authentication />} />
        <Route path='/authentication/login' element={<Login />} />
        <Route path='dashboard/*' element={<PrivateRoute Components={Dashboard}/>} />
        <Route path='/dashboard/cart' element={<PrivateRoute Components={Cart}/>} />
    </Routes>
    </BrowserRouter>
  )
}




