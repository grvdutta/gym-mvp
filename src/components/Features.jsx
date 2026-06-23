import React from 'react';
import { FEATURES } from '../constants';
import { Dumbbell, Award, Calendar } from 'lucide-react';

const ICON_MAP = { Dumbbell, Award, Calendar };

const Features = () => {
  return (
    <section id="about" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>We provide elite facilities, flexible schedules, and professional staff to help you reach your maximum physical performance.</p>
        </div>
        <div className="grid-3">
          {FEATURES.map((feature, index) => {
            const IconComponent = ICON_MAP[feature.iconName] || Dumbbell;
            return (
              <div key={index} className="card feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent className="feature-icon" size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
