import React, { useState } from 'react';
const Register2 = () => {
    const[info,setInfo]=useState({
        username:"",
        number:"",
        email:"",
        password:''
    })
    const [record,setRecord]=useState([]);
    const inputhandler=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            console.log(name,value)
            setInfo({...info,[name]:value})
        }
    const submithandler=(e)=>{
            e.preventDefault();
            let newinfo={...info,id:new Date().getTime().toString()}
            setRecord([...record,newinfo])
            console.log(record)
    }
    return (
        <>
            <form action="" onSubmit={submithandler}>
                <input type="text" placeholder='username'value={info.username} name='username' onChange={inputhandler} id='name'/>
                <input type="number" placeholder='mobile'value={info.number} name='number' onChange={inputhandler} id='number' />
                <input type="email" placeholder='email' value={info.email} name='email' onChange={inputhandler} id='email'/>
                <input type="password" placeholder='password'value={info.password} name='password' onChange={inputhandler} id='password' />
                <button type='submit' >submit</button>
            </form>
            
        </>
    )
}
export default Register2;