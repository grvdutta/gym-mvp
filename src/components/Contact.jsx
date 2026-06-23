import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate frontend-only form submit
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have questions or ready to begin? Send us a message or visit our facilities today.</p>
        </div>
        <div className="grid-2 contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-title">Contact Information</h3>
            <p className="contact-subtitle">Feel free to contact us through any of the details below. We are here to support your fitness journey.</p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+1 (555) 019-2834</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>info@apexfitness.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Our Location</h4>
                  <p>123 Muscle Boulevard, Fitness City, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-title">Send a Message</h3>
            
            {submitted ? (
              <div className="alert alert-success">
                Thank you! Your message has been sent successfully. We'll get back to you shortly.
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
