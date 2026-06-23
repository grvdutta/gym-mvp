import React from 'react';
import { STATS } from '../constants';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <div key={index} className="stats-item">
              <h3 className="stats-value">{stat.value}</h3>
              <p className="stats-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
