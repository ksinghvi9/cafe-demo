import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Rohan Sharma',
    role: 'Local Freelancer',
    stars: 5,
    text: "Absolute gem in Udaipur! The lakeside sunset views from their terrace are breathtaking, but it's their double-fermented sourdough sandwiches and Signature Cappuccino that keep me coming back. It is my favorite creative workspace in the city.",
    initials: 'RS'
  },
  {
    name: 'Elena Rostova',
    role: 'Coffee Enthusiast & Travel Blogger',
    stars: 5,
    text: "As a coffee specialist traveling through India, I was blown away by their cold brew. The extraction is smooth and the baristas genuinely know their craft. The vintage heritage interior design feels premium, quiet, and extremely welcoming.",
    initials: 'ER'
  },
  {
    name: 'Priya Patel',
    role: 'Regular Patron',
    stars: 5,
    text: "We reserved a table for a Sunday family brunch and had the Avocado Toast and Blueberry Cheesecake. The ingredients were incredibly fresh, service was prompt and polite, and the atmosphere by the lake was pure bliss. Highly recommend!",
    initials: 'PP'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Guest Reviews</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-desc">
            We take pride in crafting memorable culinary experiences. Here is what some of our regular visitors have to say.
          </p>
        </div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              className="testimonial-card glass-panel"
              variants={cardVariants}
            >
              <span className="testimonial-quote-icon">“</span>
              
              <div className="testimonial-rating">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-text">{review.text}</p>

              <div className="testimonial-author">
                <div 
                  className="testimonial-avatar"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--color-coffee)',
                    color: 'var(--color-white)',
                    fontWeight: '700',
                    fontSize: '14px',
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '0.05em'
                  }}
                >
                  {review.initials}
                </div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">{review.name}</span>
                  <span className="testimonial-title">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
