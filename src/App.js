

import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Box from '@mui/material/Box';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExeriseDetail from './pages/ExeriseDetail';



const  App =() =>{
  return(
    <Box width="400px" sx ={{ width:{ xl : '1488px'}}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExeriseDetail />}/>
      </Routes>
      <Footer />
    </Box>  
  )

}

export default App;
