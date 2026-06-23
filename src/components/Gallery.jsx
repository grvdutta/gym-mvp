import React from 'react';
import { IMAGES } from '../constants';
import { Plus } from 'lucide-react';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Gym Gallery</h2>
          <p>Take a virtual tour of our premium training facilities, weight racks, and clean environments.</p>
        </div>
        <div className="gallery-grid">
          {IMAGES.gallery.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image} 
                alt={`Gym facility ${index + 1}`} 
                className="gallery-image" 
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-icon-wrapper">
                  <Plus size={24} className="gallery-plus-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
