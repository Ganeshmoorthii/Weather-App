// HexImage.jsx
import React from 'react';
import './index.css';

const HexImage = ({ src, alt }) => {
  return (
    <div className="hex-container">
      <img src={src} alt={alt} className="hex-img" />
    </div>
  );
};

export default HexImage;
