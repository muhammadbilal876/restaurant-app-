import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = { email: "", newPassword: "", confirmPassword: "" };

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleResetPassword = e => {
    e.preventDefault();
    const { email, newPassword, confirmPassword } = state;

    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      toast.error("Please enter a valid password with at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const storedPassword = localStorage.getItem(email);
    if (!storedPassword) {
      toast.error("Email not found. Please register.");
      return;
    }

    localStorage.setItem(email, newPassword);
    toast.success("Password reset successful. Please login.");
    
    setTimeout(() => {
      navigate("/authentication/login");
    }, 3000); // Adjust the delay as needed
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
                    <h2 className='py-3 text-center mb-0'>Reset Password</h2>
                </div>
              </div>
              <form onSubmit={handleResetPassword}>
                <div className="row mb-3">
                  <div className="col text-start">
                    <label htmlFor="email" className='text-white'>Email</label>
                    <input type="email" placeholder='Email' className='form-control' name='email' value={state.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col text-start">
                    <label htmlFor="newPassword" className='text-white'>New Password</label>
                    <input type="password" placeholder='New Password' className='form-control' name='newPassword' value={state.newPassword} onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col text-start">
                    <label htmlFor="confirmPassword" className='text-white'>Confirm Password</label>
                    <input type="password" placeholder='Confirm Password' className='form-control' name='confirmPassword' value={state.confirmPassword} onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className='btn w-100 rounded-1 mt-4 text-white loginBtn'>RESET PASSWORD</button>
                  </div>
                </div>
              </form>
              <div className="row mt-4">
                <div className="col">
                  <p className='mb-0 text-center text-light'>Remember your password? <Link to='/authentication/login' className='text-white'>Login</Link></p>
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
