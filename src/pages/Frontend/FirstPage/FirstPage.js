import React from 'react'
import { Link } from 'react-router-dom'

export default function FirstPage() {
  return (
  <div class="landing-page">
        <div class="content">
            <h1>The Fastest Food Delivery in Pakistan</h1>
            <p className='descrip'>Enjoy a wide variety of delicious options<br /> from the comfort of your home.</p>
            <Link to='/authentication/login' className='button'>Get Started</Link>
        </div>
    </div>
  )
}
