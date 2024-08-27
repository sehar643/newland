
import React from 'react';
import Home from './Home/Home';
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from './Contactus/Contactus'; 
// import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="Contactus" element={<Contactus />} />  */}
      <Route path="Contactus" element={<Contactus />} />


      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
