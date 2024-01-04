// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Hotels from './Components/Hotels';
import Booking from './Components/Booking';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
       
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/hotels" element={<Hotels/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
