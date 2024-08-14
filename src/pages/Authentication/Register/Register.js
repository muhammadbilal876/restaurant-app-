import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  const initialState = { uname:"", email: "", password: "" };
  export default function Register() {

  const navigate = useNavigate()
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }));
  }

  const handleRegister = e => {

    e.preventDefault();
    let { uname, email, password } = state;

    // Check if email already exists
    if (localStorage.getItem(email)) {
      toast.error("Email already registered. Please login.");

    } if(!uname || uname.length < 3){
      toast.error("Please enter your name")
      return
    }
     if(!email){
      toast.error("Please enter your email")
      return
    } if(!password || password.length < 6){
      toast.error("Please enter your password")
      return
    }
     else {
      // Store email and password in local storage
      localStorage.setItem(email, password);
      toast.success("Registration successful. Please login.")

      setTimeout(() => {
        navigate("/authentication/login");
      }, 3000); // Adjust the delay as needed

      // setState(initialState);
    }
  }

  return (
    <>
    <div className='auth'>
      <div className="container">
        <div className="row">
          <div className="col-12 sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card p-2 p-md-3 p-lg-4">
              <div className="row">
                <div className="col">
                  <h2 className='py-3 text-center mb-0'>Register</h2>
                </div>
              </div>
              <form onSubmit={handleRegister}>
              <div className="row mb-3">
                  <div className="col text-start">
                    <label htmlFor="name" className='text-white'>Full Name</label>
                    <input type="name" placeholder='Name' className='form-control' name='uname' value={state.uname} onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col text-start">
                    <label htmlFor="email" className='text-white'>Email</label>
                    <input type="email" placeholder='Email' className='form-control' name='email' value={state.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-start">
                    <label htmlFor="password" className='text-white'>Password</label>
                    <input type="password" placeholder='Password' className='form-control' name='password' value={state.password} onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className='btn w-100 rounded-1 mt-4 text-white loginBtn'>REGISTER</button>
                  </div>
                </div>
              </form>
              <div className="row mt-4">
                <div className="col">
                  <p className='mb-0 text-center text-light'>Already have an account? <Link to='/authentication/login' className='text-white'>Login</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}

