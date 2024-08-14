import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import FirstPage from './FirstPage'
import Header from './components/Header'

import Dashboard from '../Dashboard/Dashboard'
import About from './About'
import Home from './Home'

export default function index() {
  return (
    <>
    <Header />
    <main>
    <Routes>
        <Route>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='about' element={<About />} />
            <Route path='home' element={<Home />}/>
            <Route index element={<FirstPage />} />

        </Route>
    </Routes>
    </main>
    <Footer />
    </>
  )
}
