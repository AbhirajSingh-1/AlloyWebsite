import React from 'react';
import { Building2, Award, Globe, Users, Star, CheckCircle, Factory, Truck, Timer } from 'lucide-react';
import './About.css';
import metal1 from "../../assets/metal1.jpg"
const AboutUs = () => {
  const products = [
    "Tri-metal Electrical Contact Rivets",
    "Iron Tungsten Contact Rivets", 
    "Copper Tungsten Contact Rivets",
    "Copper Hollow Rivets",
    "Solid Electrical Contact Rivets",
    "Bimetal Electrical Contact Rivets",
    "Bi-metal & Solid Silver Tips"
  ];

  const exportMarkets = [
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Europe", flag: "🇪🇺" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "Germany", flag: "🇩🇪" }
  ];

  const advantages = [
    { icon: <Star className="icon" />, title: "Premium Quality", desc: "High-grade materials meeting international standards" },
    { icon: <Timer className="icon" />, title: "Timely Delivery", desc: "Reliable delivery schedules you can count on" },
    { icon: <Award className="icon" />, title: "Competitive Prices", desc: "Best value for premium quality products" }
  ];

  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <div className="header-text">
            <div className="company-title">
              <Building2 className="building-icon" />
              <h1>KASHI CARTEL</h1>
            </div>
            <p className="company-subtitle">
              Leading manufacturer and exporter of premium quality rivets and electrical contacts since 2013
            </p>
          </div>
        </div>
      </div>

      <section className="founder-section">
      <div className="founder-container">
        <h3 className="founder-title">Founder</h3>
        <p className="founder-text">
          <strong>Sakshi Anand</strong> is the visionary founder of Kashi Cartel, leading the company with dedication,
          innovation, and a commitment to quality in the precision metal industry.
        </p>
      </div>
    </section>
    
      {/* Main Content */}
      <div className="main-content">
        
        {/* About Section */}
        <div className="about-section">
          <div className="about-grid">
            <div className="about-text">
              <h2>About Our Company</h2>
              <p className="about-description">
                Established in New Delhi, India in 2013, KASHI CARTEL has emerged as a trusted name in the manufacturing and export of high-quality rivets and electrical contacts. Our commitment to excellence and innovation has made us a preferred partner for businesses across the globe.
              </p>
              <p className="about-description">
                We specialize in providing products that meet both national and international quality standards. Our expert team ensures that every product is manufactured with precision, using materials that match the mechanical properties of the components you're joining together.
              </p>
            </div>
            <div className="company-info-card">
              <div className="info-items">
                <div className="info-item">
                  <Building2 className="info-icon" />
                  <div>
                    <h3>Business Type</h3>
                    <p>Supplier, Exporter, Importer</p>
                  </div>
                </div>
                <div className="info-item">
                  <Factory className="info-icon" />
                  <div>
                    <h3>Established</h3>
                    <p>2013, New Delhi, India</p>
                  </div>
                </div>
                <div className="info-item">
                  <Truck className="info-icon" />
                  <div>
                    <h3>Production Capacity</h3>
                    <p>As per customer requirement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Image Placeholder */}
        <div className="product-showcase">
          <div className="showcase-content">
            <div className="showcase-icon">
              <Factory className="factory-icon" />
            </div>
            <h3>Product Showcase</h3>
             <img src={metal1} alt="Product Showcase" className="responsive-img" />
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          <h2 className="section-title">Our Product Range</h2>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-content">
                  <CheckCircle className="check-icon" />
                  <h3>{product}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="core-products">
            <p>
              <strong>Core Products:</strong> Bi-Metal Rivets, Tri-Metal Rivets, Tungsten Rivets
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="advantages-section">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon-circle">
                  <span className="advantage-icon">{advantage.icon}</span>
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Export Markets Section */}
        <div className="export-section">
          <h2 className="section-title">Global Presence</h2>
          <div className="export-card">
            <div className="export-header">
              <Globe className="globe-icon" />
              <h3>Export Markets</h3>
            </div>
            <div className="markets-grid">
              {exportMarkets.map((market, index) => (
                <div key={index} className="market-item">
                  <div className="market-flag">{market.flag}</div>
                  <h4>{market.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="quality-section">
          <Award className="quality-icon" />
          <h2>Quality Commitment</h2>
          <p>
            We recommend choosing materials that match the mechanical properties of the components you're joining together. 
            Our products are manufactured to meet both national and international quality standards, ensuring reliability and performance.
          </p>
        </div>
      </div>

      

    </div>
  );
};

export default AboutUs;