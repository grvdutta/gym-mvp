import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand/Logo Column */}
          <div className="footer-col brand-col">
            <a href="#home" className="logo footer-logo">
              <Dumbbell className="logo-icon" />
              <span>APEX<span>FITNESS</span></span>
            </a>
            <p className="footer-about">
              Join the ultimate premium fitness destination. We offer top-tier equipment, certified trainers, and customized workouts to guide you on your wellness journey.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours Column */}
          <div className="footer-col">
            <h4 className="footer-title">Gym Hours</h4>
            <ul className="footer-hours">
              <li><span>Monday - Friday:</span> <span>5:00 AM - 11:00 PM</span></li>
              <li><span>Saturday:</span> <span>6:00 AM - 9:00 PM</span></li>
              <li><span>Sunday:</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="highlight-hours">Note: Pro & Elite members have 24/7 access.</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} className="footer-contact-icon" />
                <span>123 Muscle Blvd, NY 10001</span>
              </li>
              <li>
                <Phone size={16} className="footer-contact-icon" />
                <span>+1 (555) 019-2834</span>
              </li>
              <li>
                <Mail size={16} className="footer-contact-icon" />
                <span>info@apexfitness.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} APEX FITNESS. All Rights Reserved. Built as a premium client-ready template.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
