import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const HandleLogin = () =>{
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if(storedUser?.email === email && storedUser?.password === password){
            localStorage.setItem("isAuth" ,true);
            navigate("/dashboard");
        }else {
            alert("Invalid Credentials");
        }

    };

  return (
    <body>
    <div className='login'>
        <h2>Login</h2>
        <input type="email" placeholder='Enter Email' onChange={ (e) => setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button onClick={HandleLogin}>Login</button>
        {/* <button onClick={ () => navigate("/dashboard")}>Login </button> */}
    </div>
    </body>
  )
}
