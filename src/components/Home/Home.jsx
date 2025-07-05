import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "https://sccdn.sechitech.com/shzj/uploads/6661.jpg",
      title: "Precision Engineering",
      description: "High-quality metal screws manufactured with precision"
    },
    {
      id: 2,
      image: "https://www.akashdeep.co.in/images/gallery/big4.png",
      title: "Industrial Grade",
      description: "Meeting demanding industrial standards worldwide"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified manufacturing process"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Function to scroll to products section
  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const floatingElements = [
    { id: 1, size: 'small', top: '20%', left: '15%', delay: '0s' },
    { id: 2, size: 'medium', top: '60%', left: '25%', delay: '1s' },
    { id: 3, size: 'tiny', top: '35%', left: '35%', delay: '2s' },
    { id: 4, size: 'large', top: '75%', left: '10%', delay: '0.5s' },
    { id: 5, size: 'mini', top: '85%', left: '30%', delay: '1.5s' },
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '500+', label: 'Product Variants' },
    { number: '200+', label: 'Satisfied Clients' }
  ];

  return (
    <div className="home">
      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          <div className="content-grid">
            {/* Left Content */}
            <div className="left-content">
              {/* ISO Certification Badge */}
              <div className="iso-badge">
                <div className="badge-dot"></div>
                <span>GST 06BEEPA8718J1ZI</span>
              </div>

              {/* Main Heading */}
              <div className="main-heading">
                <h2 className="heading-text">
                  PRECISION
                  <br />
                  <span className="heading-highlight">
                    METAL SCREWS
                  </span>
                </h2>
                <p className="subheading">
                  FOR EVERY APPLICATION
                </p>
              </div>

              {/* Description */}
              <p className="description">
                Manufacturing high-quality metal screws with precision engineering. From automotive to aerospace, 
                we deliver fastening solutions that meet the most demanding industrial standards.
              </p>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="primary-btn" onClick={scrollToProducts}>
                  <span>View Products</span>
                  <span className="arrow">→</span>
                </button>
                <Link to="/services" className="secondary-btn">
                  View Services
                </Link>
              </div>

              {/* Stats */}
              <div className="stats-container">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`stat-item ${hoveredStat === index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div className="stat-number">
                      {stat.number}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image Slider */}
            <div className="right-content">
              {/* Premium Quality Badge */}
              <div className="premium-badge">
                Premium Quality
              </div>

              {/* Fast Delivery Badge */}
              <div className="delivery-badge">
                Fast Delivery
              </div>

              {/* Image Slider Container */}
              <div className="slider-container">
                <div className="slider-wrapper">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="slide-image"
                      />
                      <div className="slide-overlay">
                        <div className="slide-content">
                          <h3 className="slide-title">{slide.title}</h3>
                          <p className="slide-description">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button className="slider-nav prev" onClick={prevSlide}>
                  ←
                </button>
                <button className="slider-nav next" onClick={nextSlide}>
                  →
                </button>

                {/* Dots Indicator */}
                <div className="slider-dots">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements Overlay */}
              <div className="floating-overlay">
                {floatingElements.map((element) => (
                  <div
                    key={element.id}
                    className={`floating-element ${element.size}`}
                    style={{
                      top: element.top,
                      left: element.left,
                      animationDelay: element.delay
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Rivet Products Section */}
      <section className="rivet-products" ref={productsRef}>
        <div className="rivet-header">
          <span className="rivet-products-label">PRODUCTS</span>
          <h1 className="rivet-main-title">
            Precision-Engineered Rivets for
            <br />
            Industrial Excellence
          </h1>
          <p className="rivet-description">
            Kashi Cartel delivers the most comprehensive range of high-performance rivets, meticulously crafted to
            meet the demanding requirements of modern manufacturing and assembly operations across diverse
            industries.
          </p>
        </div>

        <div className="rivet-products-grid">
          <div className="rivet-product-card">
            <div className="rivet-product-image">
              <img 
                src="https://3.imimg.com/data3/MW/MW/MY-2457985/bi-metal-contact-rivets-500x500.jpg" 
                alt="Bimetal Rivets"
                className="rivet-product-img"
              />
            </div>
            <div className="rivet-product-info">
              <h3 className="rivet-product-title">BIMETAL RIVETS</h3>
              <p className="rivet-product-description">
                High-strength rivets combining two different metals for superior performance in demanding applications.
                Perfect for aerospace and automotive industries.
              </p>
            </div>
          </div>

          <div className="rivet-product-card">
            <div className="rivet-product-image">
              <img 
                src="https://5.imimg.com/data5/ANDROID/Default/2025/6/520501601/KJ/MX/OR/22652945/product-jpeg.jpg" 
                alt="Tri-Metal Rivets"
                className="rivet-product-img"
              />
            </div>
            <div className="rivet-product-info">
              <h3 className="rivet-product-title">TRI-METAL RIVETS</h3>
              <p className="rivet-product-description">
                Advanced three-metal construction providing exceptional durability and corrosion resistance for
                heavy-duty industrial applications.
              </p>
            </div>
          </div>

          <div className="rivet-product-card">
            <div className="rivet-product-image">
              <img 
                src="https://img2.exportersindia.com/product_images/bc-full/2021/8/9129324/alloy-electrical-contact-tip-1628742262-5937980.jpeg" 
                alt="Electrical Contact Rivets"
                className="rivet-product-img"
              />
            </div>
            <div className="rivet-product-info">
              <h3 className="rivet-product-title">ELECTRICAL CONTACT TIP</h3>
              <p className="rivet-product-description">
                Precision-engineered rivets designed for electrical connections, offering excellent conductivity and
                reliable performance in electronic assemblies.
              </p>
            </div>
          </div>
        </div>

        <div className="rivet-quality-section">
          <div className="rivet-quality-content">
            <h2 className="rivet-quality-title">Quality Standards & Certifications</h2>
            <p className="rivet-quality-description">
              All Kashi Cartel rivets conform to international standards including ISO, DIN, JIS, ASTM, and BS
              specifications. Our products undergo rigorous quality testing and come with complete traceability
              documentation for critical applications.
            </p>
          </div>
        </div>
      </section>
      
      <section className="founder-section">
      <div className="founder-container">
        <h3 className="founder-title">Founder</h3>
        <p className="founder-text">
          <strong>Sakshi Anand</strong> is the visionary founder of Kashi Cartel, leading the company with dedication,
          innovation, and a commitment to quality in the precision metal industry.
        </p>
      </div>
    </section>
    </div>
  );
};

export default Home;