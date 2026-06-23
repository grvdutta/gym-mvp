import React from 'react';
import { TRAINERS } from '../constants';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Trainers = () => {
  return (
    <section id="trainers" className="trainers-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Expert Trainers</h2>
          <p>Our coaches are fully certified elite-level professionals who are dedicated to push you towards your goals.</p>
        </div>
        <div className="grid-4">
          {TRAINERS.map((trainer, index) => (
            <div key={index} className="card trainer-card">
              <div className="trainer-image-wrapper">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="trainer-image" 
                  loading="lazy" 
                />
                <div className="trainer-socials">
                  <a href="#" className="trainer-social-link" aria-label={`${trainer.name} Instagram`}>
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="trainer-social-link" aria-label={`${trainer.name} Twitter`}>
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="trainer-social-link" aria-label={`${trainer.name} Facebook`}>
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-specialization">{trainer.specialization}</p>
                <p className="trainer-experience">{trainer.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
