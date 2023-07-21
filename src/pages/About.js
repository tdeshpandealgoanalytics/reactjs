// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'; // Correct import
import CityCard from '../components/CityCard';
import citiesData from '../data/cities';

const About = () => {
  const last3Cities = citiesData.slice(3, 6);

  return (
    <>
      {/* City Cards Carousel */}
      <h1 className="text-center mb-4">Top 3 Cities</h1>
      <div className="row">
        <div className="col-md-12 mb-4">
          <Carousel>
            {last3Cities.map((city, index) => (
              <Carousel.Item key={index}>
                <CityCard city={city} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Back Button to Landing Page */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">
          Back to Landing Page
        </Link>
      </div>
    </>
  );
};

export default About;
