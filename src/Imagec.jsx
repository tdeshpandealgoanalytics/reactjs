import React from 'react';
import './Imagec.css'; // Include your CSS or SCSS file for styling
import sampleImg from "./image.png";

function Imagec() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className='bg'>
      {isMobile?
      (<>
        <h1 className='head1'>Defect detection during manufacturing processes </h1>
        <img src={sampleImg} alt="An example image" />
      </>):
      (
        <>
        <img src={sampleImg} alt="An example image" />
        </>
      )
       }
       
        
 
    </div>
  );
}

export default Imagec;