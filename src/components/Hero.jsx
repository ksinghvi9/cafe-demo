import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.jpg';

const Hero = () => {
  const handleScrollTo = (id) => {
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
    <section id="home" className="hero-section">
      {/* Background Image with Zoom Motion */}
      <div className="hero-bg">
        <motion.img 
          src={heroBg} 
          alt="Brew & Crust Café Interior" 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="container">
        <div className="hero-content">
          <motion.span 
            className="hero-tagline"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Lakeside Artisan Experience
          </motion.span>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            Where Every Cup <br />
            Tells a Story
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            A cozy neighborhood café serving handcrafted coffee, artisan sandwiches, fresh pastries, and memorable conversations in the heart of Udaipur.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button 
              className="btn btn-primary"
              onClick={() => handleScrollTo('menu')}
            >
              Explore Menu
            </button>
            <button 
              className="btn btn-outline-white"
              onClick={() => handleScrollTo('reservations')}
            >
              Reserve a Table
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll Down</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
