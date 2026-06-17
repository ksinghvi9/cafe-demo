import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about_cafe.jpg';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Text Content */}
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ textAlign: 'left' }}>
              <span className="section-subtitle">Since 2021</span>
              <h2 className="about-story-title">Our Story</h2>
            </div>
            
            <p className="about-text">
              Brew & Crust Café began with a simple idea — create an inspiring sanctuary in Udaipur where great coffee, fresh food, and meaningful moments come together. Nestled in the historic lanes overlooking the lakeside, our space is designed for early-morning espresso thinkers, midday creators, and evening storytellers.
            </p>
            
            <p className="about-text">
              We source our single-origin Arabica beans directly from sustainable, shade-grown estates in Chikmagalur, roasting them to perfection. Our artisan crusts and breads are naturally leavened, fermented for 24 hours, and baked fresh in-house every single morning. We believe that true hospitality lies in the details—from the warmth of our baristas to the crisp texture of our sourdough.
            </p>
            
            <div className="about-details">
              <div className="about-detail-item">
                <span className="about-detail-val">100%</span>
                <span className="about-detail-lbl">Organic Arabica</span>
              </div>
              <div className="about-detail-item">
                <span className="about-detail-val">24 Hrs</span>
                <span className="about-detail-lbl">Slow Fermentation</span>
              </div>
            </div>
          </motion.div>
          
          {/* Visual Side */}
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={aboutImg} 
              alt="Pouring artisanal drip coffee at Brew & Crust" 
              className="about-image"
            />
            <div className="about-image-badge glass-panel">
              <span className="about-badge-title">Artisanal Quality</span>
              <span className="about-badge-desc">Udaipur's Coffee Roasters</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
