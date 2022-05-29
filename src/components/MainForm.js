import React, { useState} from "react";
import NavBar from './NavBar/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from '../Page/Profile';

function MainForm() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Profile/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default MainForm;