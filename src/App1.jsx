import React from 'react';
import './App1.css'; // Include your CSS or SCSS file for styling
import sampleImg from "./assets/image.png";
import Navigation from './Navigation';
import Textc from './Textc';
import Imagec from './Imagec';

function App() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="main">
      {!isMobile?
    (
    <>
    <Navigation />
    <div className={`container ${isMobile ? 'mobile' : ''}`}>
    <Textc />
    <Imagec />
    </div>
    </>
    ):
    (
      <>
      <div className={`container ${isMobile ? 'mobile' : ''}`}>
      <Textc />
      <Imagec />
      </div>
      </>
    )
    }
      {/* {!isMobile ? <Navigation /> : null} 
       
       <div className={`container ${isMobile ? 'mobile' : ''}`}>
        <Textc />
        <Imagec />

      </div> */}
    </div>
  );
}

export default App;
