import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Calendar, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section on scroll
      const sections = ['home', 'about', 'menu', 'why-us', 'gallery', 'testimonials', 'reservations', 'location'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled glass-panel' : 'glass-panel'}`}>
        <div className="container">
          <a href="#home" className="logo-link" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
            <Coffee size={28} className="logo-icon" style={{ color: 'var(--color-coffee)' }} />
            <span className="logo-text">Brew & Crust</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
              >
                Our Story
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('menu'); }}
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#why-us" 
                className={`nav-link ${activeSection === 'why-us' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('why-us'); }}
              >
                Why Us
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('gallery'); }}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#reservations" 
                className={`nav-link ${activeSection === 'reservations' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('reservations'); }}
              >
                Reservations
              </a>
            </li>
            <li>
              <a 
                href="#location" 
                className={`nav-link ${activeSection === 'location' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('location'); }}
              >
                Visit
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{ marginRight: '8px' }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => handleLinkClick('reservations')}
            >
              <Calendar size={16} />
              Book Table
            </button>
            <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <a href="#home" className="logo-link" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
            <Coffee size={24} style={{ color: 'var(--color-coffee)' }} />
            <span className="logo-text">Brew & Crust</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={toggleMobileMenu} aria-label="Close navigation menu">
              <X size={24} />
            </button>
          </div>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <a 
              href="#home" 
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
            >
              Our Story
            </a>
          </li>
          <li>
            <a 
              href="#menu" 
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick('menu'); }}
            >
              Menu
            </a>
          </li>
          <li>
            <a 
              href="#why-us" 
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick('why-us'); }}
            >
              Why Us
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick('gallery'); }}
            >
              Gallery
            </a>
          </li>
          <li>
            <a 
              href="#reservations" 
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick('reservations'); }}
            >
              Reservations
            </a>
          </li>
          <li>
            <a 
              href="#location" 
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick('location'); }}
            >
              Visit
            </a>
          </li>
        </ul>

        <button 
          className="btn btn-primary" 
          style={{ marginTop: 'auto', width: '100%' }}
          onClick={() => handleLinkClick('reservations')}
        >
          <Calendar size={16} />
          Book Table
        </button>
      </div>
    </>
  );
};

export default Navbar;
