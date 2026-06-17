import React from 'react';
import { Coffee } from 'lucide-react';

// Custom SVG components for brand/social icons since the local package does not export them
const InstagramIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Footer = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="logo-link" style={{ cursor: 'pointer' }} onClick={(e) => handleScrollTo(e, 'home')}>
              <Coffee size={24} style={{ color: 'var(--color-gold)' }} />
              <span className="footer-logo-text">Brew & Crust</span>
            </div>
            <p className="footer-desc">
              Experience handcrafted coffee and organic sourdough pastries overlooking the serene waters of Udaipur's Lake Pichola.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Follow us on Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Follow us on Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://wa.me/912942490789" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Contact us on WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a>
              </li>
              <li className="footer-link-item">
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>Our Story</a>
              </li>
              <li className="footer-link-item">
                <a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Menu</a>
              </li>
              <li className="footer-link-item">
                <a href="#gallery" onClick={(e) => handleScrollTo(e, 'gallery')}>Gallery</a>
              </li>
              <li className="footer-link-item">
                <a href="#reservations" onClick={(e) => handleScrollTo(e, 'reservations')}>Reservations</a>
              </li>
              <li className="footer-link-item">
                <a href="#location" onClick={(e) => handleScrollTo(e, 'location')}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="footer-col">
            <h3>Hours</h3>
            <div className="footer-hours-list">
              <div className="footer-hours-item">
                <span className="footer-hours-day">Mon - Fri</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Sat - Sun</span>
                <span>7:30 AM - 11:00 PM</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Holidays</span>
                <span>8:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* About Fictional Demo Disclaimer */}
          <div className="footer-col">
            <h3>Showcase Project</h3>
            <p className="footer-desc" style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.7' }}>
              <strong>Brew & Crust Café</strong> is a fictional demo website created to showcase high-end portfolio web development and web design services.
            </p>
            <p className="footer-desc" style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '8px' }}>
              All characters, reviews, and bookings displayed are entirely fictional.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Brew & Crust Café. Fictional Showcase Project.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
