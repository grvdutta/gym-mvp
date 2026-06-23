import React from 'react';
import { SERVICES } from '../constants';
import { Flame, Activity, TrendingDown, UserCheck } from 'lucide-react';

const ICON_MAP = { Flame, Activity, TrendingDown, UserCheck };

const Services = () => {
  return (
    <section id="programs" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Programs</h2>
          <p>Explore elite-level training programs tailored to your schedule, health level, and long-term targets.</p>
        </div>
        <div className="grid-4">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || ICON_MAP.Flame;
            return (
              <div key={index} className="card service-card">
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" size={28} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#contact" className="service-link">
                  Learn More <span>&rarr;</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
