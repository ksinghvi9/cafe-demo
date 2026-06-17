import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Croissant, Leaf, Wifi } from 'lucide-react';

const cards = [
  {
    icon: <Coffee size={32} />,
    title: 'Freshly Brewed Coffee',
    description: 'We roast our single-origin coffee beans weekly and pull each espresso shot with calibrated precision for maximum flavor.'
  },
  {
    icon: <Croissant size={32} />,
    title: 'Baked Daily',
    description: 'Our naturally fermented sourdough loaves, pastries, and croissants are hand-rolled and baked fresh every morning.'
  },
  {
    icon: <Leaf size={32} />,
    title: 'Quality Ingredients',
    description: 'We prioritize organic local vegetables, high-end imported cheeses, and clean, sustainable farm-to-table sourcing.'
  },
  {
    icon: <Wifi size={32} />,
    title: 'Free WiFi & Workspace',
    description: 'Equipped with high-speed internet, silent zones, and accessible power outlets, we are the perfect creative workspace.'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Philosophy</span>
          <h2 className="section-title">The Brew & Crust Experience</h2>
          <p className="section-desc">
            We combine artisanal dedication with lakeside Udaipur heritage to bring you a truly elevated dining experience.
          </p>
        </div>

        <motion.div 
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              className="why-card glass-panel"
              variants={cardVariants}
            >
              <div className="why-icon-box">
                {card.icon}
              </div>
              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-desc">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
