// src/components/CityCard.js
import React from 'react';
import './CityCard.css';

const CityCard = ({ city }) => {
  return (
    <div className="card">
      <img className="card-img-top city-image" src={city.imageUrl} alt={city.name} />
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <p className="card-text">{city.description}</p>
      </div>
    </div>
  );
};

export default CityCard;
