import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import Navbar from './Components/Navbar';
import {Route, Routes} from "react-router-dom";
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </>
  );
}

export default App;
