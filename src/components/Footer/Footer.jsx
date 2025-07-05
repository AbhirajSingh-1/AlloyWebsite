import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-title">Kashi Cartel</h2>
          <p className="footer-text">
            Leading manufacturer of premium-quality metal screws and precision fasteners for industrial use.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact</h3>
          <div className="footer-item">
            <Mail className="footer-icon" />
            <a href="mailto:Kashicartel@gmail.com">Kashicartel@gmail.com</a>
          </div>
          <div className="footer-item">
            <Phone className="footer-icon" />
            <a href="tel:+919821673232">+91 98216 73232</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/certificate">Certificate</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kashi Cartel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
