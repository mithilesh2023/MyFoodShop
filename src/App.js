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
import Register2 from './component/User/Register2';
import Fruits from './component/Products/Fruits';
import Vegitables from './component/Products/Vegitables';
import Oil from './component/Products/Oil';
import Pluses from './component/Products/Pluses';
import Cookies from './component/Products/Cookies';
import Spices from './component/Products/Spices';

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
     <Route path='/fruit' element={<Fruits/>}/>
     <Route path='/vegitable' element={<Vegitables/>}/>
     <Route path='/spices' element={<Spices/>}/>
     <Route path='/pluses' element={<Pluses/>}/>
     <Route path='/oil' element={<Oil/>}/>
     <Route path='/cookies' element={<Cookies/>}/>
     {/* <Route path="/register2" element={<Register2/>}/> */}
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
