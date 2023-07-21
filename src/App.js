// src/App.js
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';

const LandingPage = () => {
  return (
    <div className="text-center mt-5">
      <h1>Welcome!</h1>
      <p>Hello! This is the landing page.</p>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              Costal tourism
            </Link>
            <Link to="/about" className="navbar-brand">
              Hill Stations
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
        <Route path="/" element={<LandingPage />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
