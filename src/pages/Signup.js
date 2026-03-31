import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Signup() {

    const [email ,setEmail] =useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        localStorage.setItem("user", JSON.stringify({email,password}));
        alert("Signup Successfull");
        navigate("/login");
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
        setPassword(e.target.value);

    }
  return (
    <div className='signup'>
        <h2> Signup</h2>
        <input type="email" placeholder='Enter Email' onChange={handleChange} />
        <input type="password" placeholder="Enter Password" onChange={handleChange}/>
        <button onClick={handleSignup}>Sign Up</button>

    </div>
  )     
}
