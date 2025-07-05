import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <header className="services-header">
          <h1>Our Services</h1>
          <p className="services-intro">
            We provide <strong>metal fasteners</strong> and{" "}
            <strong>rivets</strong> made for a multitude of applications that
            supplies every industry with exactly what you need. We suggest that
            you choose a material that has the same mechanical properties as the
            pieces and parts that you are joining together.
          </p>
        </header>

        <div className="services-grid">
          {/* Bi-metal Rivets Section */}
          <div className="service-card">
            <div className="service-header">
              <h2>Bi-metal Rivets</h2>
            </div>
            <div className="service-content">
              <div className="service-types">
                <span className="highlight">AgSnO2 Bi-metal Rivets</span>,
                <span className="highlight">
                  {" "}
                  Silver Bimetal Contact Rivets
                </span>
                , Bimetal Contact Rivets, Bimetal Alloy Rivets, Bimetal Silver
                Contacts, Bimetal Electrical Contact Rivets, AgNi/Cu Bimetal
                Rivets, AgCdO/Cu Bi-metal Rivets, Ag/Cu Bimetal Rivet.
              </div>

              <div className="service-details">
                <div className="detail-item">
                  <h4>Material:</h4>
                  <p>Ag/Cu, AgCdO/Cu, FAg/Cu, AgSnO2, AgSnO2InO3/Cu, etc</p>
                </div>

                <div className="detail-item">
                  <h4>Main Application:</h4>
                  <p>
                    Automobile electrical equipments, Relays, Contactors,
                    Temperature controllers and other electrical appliances.
                  </p>
                </div>

                <div className="detail-item">
                  <h4>Specifications:</h4>
                  <p>
                    Contact us for more information about Bi-metal rivets for
                    your particular application.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tri-metal Rivets Section */}
          <div className="service-card">
            <div className="service-header">
              <h2>Tri-metal Rivets</h2>
            </div>
            <div className="service-content">
              <div className="service-types">
                Three Composite Rivets,
                <span className="highlight"> AgNi Three Composite Rivets</span>,
                High Precision Tri-Metal Rivets, AgSnO2 Three Composite Rivets,
                AgZnO Three Composite Rivets, Pure Silver Tri-metal Rivets,
                AgCdO Tri-Metal Rivets
              </div>

              <div className="service-details">
                <div className="detail-item">
                  <h4>Materials:</h4>
                  <p>Ag, FAg, AgNi, AgSnO2, AgSnO2In2O3, Ag/Cu, AgZnO, AgCdO</p>
                </div>

                <div className="detail-item">
                  <h4>Main Application:</h4>
                  <p>Relays, Contactors, Micro Switches, Wall Switches etc</p>
                </div>

                <div className="detail-item">
                  <h4>Specifications:</h4>
                  <p>
                    Contact us for more information about Tri-metal contact
                    rivets for your particular application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="services-cta">
          <h3>Need Custom Solutions?</h3>
          <p>
            Our team of experts is ready to help you find the perfect metal
            fasteners and rivets for your specific application.
          </p>
          <a
            href="https://wa.me/919821673232"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
