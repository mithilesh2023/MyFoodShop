import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Register=()=>{
   const[userRegister,setUserRegister]=useState({
    username:'',
    email:'',
    mobile:'',
    password:''
   })
   const[record,setRecord]=useState([])
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        // console.log(name,value)
        setUserRegister({...userRegister,[name]:value})
    } 
    const handleSubmit=(e)=>{
            e.preventDefault();
            const newRecord={...userRegister, id : new Date().getTime().toString()}
            // console.log(record)
        setRecord([...record,newRecord])
        // console.log(record)
        setUserRegister({username:'',email:'',mobile:'',password:''})
    }   
    return(
        <>
       <div class="login">
        <form action="" onSubmit={handleSubmit}>
            <h2>Register Here</h2>
            <label htmlFor="username">User Name</label> <br />
            <input type="text" value={userRegister.username} onChange={handleInput} name="username" id='username' placeholder='Enter Your Name' /><br /> 

            <label htmlFor="username">Email</label> <br />
            <input type="email" value={userRegister.email} name='email' onChange={handleInput} id='email' placeholder='Enter Your Email' /><br />

            <label htmlFor="mobile">Mobile</label> <br />
            <input type="number" value={userRegister.mobile} name='mobile' onChange={handleInput} id='mobile' placeholder='Enter Your mobile' /><br /> 

            <label htmlFor="password">Password</label><br />
            <input type="password" value={userRegister.password} name='password' onChange={handleInput} id='password' placeholder='Enter Your Password' /> <br />

            {/* <label htmlFor="confirm password">Confirm Password</label><br />
            <input type="password" name="confirm password" placeholder='Enter Your Confirm Password' /> <br />
             <br /> */}
          <button type='submit'>Register</button>
            <span id='account'><NavLink className="login-to-register" to="/login">You need to login.</NavLink></span> 
        </form>
        </div>
        <div>
            {
                record.map((currElem )=>{
                    return(
                        <>
                            <div key={currElem.id}>
                                <p>{currElem.username}</p>
                                <p>{currElem.email}</p>
                                <p>{currElem.mobile}</p>
                                <p>{currElem.password}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export default Register;