import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Login=()=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleInput=(e)=>{
        e.preventDefault();
        console.log(e)
    }
    return(
        <>
        <div class="login">
        <form action="" onSubmit={handleInput}>
            <h2>Login Here</h2>
            <label htmlFor="username">Email</label> <br />
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' /><br /> <br />
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password' /> <br />
            <span id='password'><a href="/">forgot password ?</a></span>
             <br />
            <button type="submit">Login</button>
            <span id='account'><NavLink className="login-to-register" to="/register">You need to register first.</NavLink></span> 
        </form>
        </div>
        </>
    )
}
export default Login;
