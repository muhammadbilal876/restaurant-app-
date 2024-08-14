import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from '../../../context/AuthContext';

const initialState = { email: "", password: "" };

export default function Login() {

  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

  console.log(isAuthenticated)

  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }));
  };

  // const handleLogin = () => {
  //   setIsAuthenticated(true)
  //   navigate("/dashboard");
  // }
  const handleLogin = e => {
    e.preventDefault();
    const { email, password } = state;

    const storedPassword = localStorage.getItem(email);
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!password || password.length < 6) {
      toast.error("Please enter your password");
      return;
    }
    if (storedPassword === password) {
      toast.success("Login successful.");
      setIsAuthenticated(true)
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000); // Adjust the delay as needed
    }
     else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <>
    <div className='auth'>
      <div className="container">
        <div className="row">
          <div className="col-12 sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card p-2 p-md-3 p-lg-4">
              <div className="row">
                <div className="col">
                    <h2 className='text-center'>Login</h2>
                </div>
              </div>
              <form onSubmit={handleLogin}>
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
                <p className='mb-0 mt-3 text-start'>
                     <Link to='/authentication/forget-password' className='text-white'>Forget Password</Link>
                  </p>
                <div className="row">
                  <div className="col">
                    <button className='btn w-100 rounded-1 mt-4 text-white loginBtn'>LOGIN</button>
                  </div>
                </div>
              </form>
              <div className="row mt-4">
                <div className="col">
                  <p className='mb-0 text-center text-light'>
                    Need an account? <Link to='/authentication/register' className='text-white'>Register</Link>
                  </p>
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


