import React, { useState } from "react";
import { Settings, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Certificate", path: "/certificate" },
    { name: "Contact", path: "/contact" },
    { name: "Client List", path: "/clientlist" },
  ];

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="icon" />
              <span>Kashicartel@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone className="icon" />
              <span>+91 98216 73232</span>
            </div>
          </div>

          {/* Get Quote Button */}
          <a
            href="https://wa.me/919821673232"
            target="_blank"
            rel="noopener noreferrer"
            className="get-quote-btn"
          >
            Get Quote
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Settings className="icon" />
            </div>
            <div className="logo-text">
              <h1>Kashi Cartel</h1>
              <p>Precision Metal Screws</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                <span className="nav-underline"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
          >
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="mobile-nav-link"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
