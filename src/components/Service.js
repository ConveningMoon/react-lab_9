import React from 'react';

function Service({ imgSrc, altText, title, description }) {
  return (
    <div className="service">
      <img src={imgSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Service;
