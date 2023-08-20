import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const[currentForm,setCurrentForm]=useState('login');
    return (
        <>
            <div className="header">
                <div className="logo">
                    <p>Foodie</p>
                </div>
                <div className="search">
                    <input type="search" placeholder='search...' id='search' />
                </div>
                <div className="pages">
                    <ul>
                        <li><NavLink to="/" className="a">Home</NavLink></li>
                        <li><NavLink to="/about" className="a">About</NavLink></li>
                        <li><NavLink to="/product" className="a">Product</NavLink></li>
                        <li><NavLink to="/contact" className="a">Contact</NavLink></li>
                        {/* {
                            currentForm==="login"? <li><NavLink to="/login" className="a">Login</NavLink></li>:<li><NavLink to="/register" className="a">Register</NavLink></li>;
                        }
                         */}
                         <li><NavLink to="/register" className="a">Register</NavLink></li>
                          <li><NavLink to="/login" className="a">Login</NavLink></li>
                        <li><NavLink to="/logout" className="a">Logout</NavLink></li>

                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;