import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Members Say</h2>
          <p>Real success stories from people who changed their lives, built confidence, and reached their fitness goals with us.</p>
        </div>
        <div className="grid-3 testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="card testimonial-card">
              <div className="testimonial-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`star-icon ${i < testimonial.rating ? 'star-filled' : 'star-empty'}`} 
                  />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.review}"</p>
              <div className="testimonial-user">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
