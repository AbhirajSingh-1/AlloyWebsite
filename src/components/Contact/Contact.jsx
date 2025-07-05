import "./Contact.css";

export default function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We work with many companies as well as institutions.
        </p>
      </div>

      <div className="contact-info">
        <div className="email-section">
          <span className="email-label">OUR EMAIL ADDRESS</span>
          <div className="email-address">Kashicartel@gmail.com</div>
        </div>

        <a
          href="https://wa.me/919821673232"
          target="_blank"
          rel="noopener noreferrer"
          className="calendly-button"
        >
          <span className="calendly-icon">📅</span>
          Contact on WhatsApp
        </a>
      </div>

      <div className="contact-form">
        <div className="embedded-form-container">
          <iframe
            title="Contact Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdGMspwWEjT0HYF9Dz7i7V-pWw7OwY4XWrDac03D8aNBnsPkQ/viewform?usp=header"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading Google Form...
          </iframe>
        </div>
      </div>
    </div>
  );
}
