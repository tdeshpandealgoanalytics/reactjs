import React, { useState } from 'react';
import './Navigation.css'; // Include your CSS or SCSS file for styling

function Navigation() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="logo">aQuality</div>
        <ul className="nav-links">
            <li className={activeTab === 'home' ? 'active' : ''}>
              <a href="/home" onClick={() => setActiveTab('home')}>
                Home
              </a>
            </li>
            <li className={activeTab === 'about' ? 'active' : ''}>
              <a href="/dashboard" onClick={() => setActiveTab('about')}>
                About Us
              </a>
            </li>
            <li className={activeTab === 'contact' ? 'active' : ''}>
              <a href="/home" onClick={() => setActiveTab('contact')}>
                Contact Us
              </a>
            </li>
         </ul>
        <div className="login-buttons">
            <button>Register</button>
            <button>Login</button>
            
          </div>
      </nav>
    </>
  );
}

export default Navigation;
