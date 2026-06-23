import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Flexible Membership Plans</h2>
          <p>Choose the plan that fits your lifestyle. No hidden fees. Cancel or upgrade anytime.</p>
        </div>
        <div className="grid-3 pricing-grid">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`card pricing-card ${plan.highlight ? 'pricing-card-highlighted' : ''}`}
            >
              {plan.highlight && <span className="badge">Most Popular</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price-value">{plan.price}</span>
                <span className="price-period">/{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="plan-feature-item">
                    <Check className="check-icon" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`btn btn-block ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
