import React from 'react';
import { IMAGES } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.75), rgba(17, 17, 17, 0.95)), url(${IMAGES.heroBg})` }}>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">Push Your Limits</span>
          <h1 className="hero-title">
            SHAPE YOUR BODY <br />
            <span className="text-highlight">SHAPE YOUR LIFE</span>
          </h1>
          <p className="hero-description">
            Experience high-performance fitness training at Apex Fitness. Gain access to elite equipment, certified expert coaches, and customized fitness plans to reach your peak potential.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Join Now <ChevronRight size={18} />
            </a>
            <a href="#programs" className="btn btn-secondary">
              View Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
