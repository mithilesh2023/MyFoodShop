import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Header from './component/User/Header';
import Login from './component/User/Login';
import Register from './component/User/Register';
import Contact from './component/Contact';
import About from './component/About';
import Product from './component/Product';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/product" element={<Product/>}/>
     <Route path="/about" element={<About/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
