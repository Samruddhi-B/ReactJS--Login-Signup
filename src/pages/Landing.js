import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const navigate=useNavigate(); 
  return (
    <div className='landing'>
        <h1>Welcome to our platform!  </h1>
        <p>We’re glad to have you here. Join us today and explore amazing features built just for you.Get started by logging in or creating a new account.</p>
        <div className='buttons'>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/Signup")}>Sign Up</button>
        </div>

    </div>
  )
}
