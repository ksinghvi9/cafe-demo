import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Find Us</span>
          <h2 className="section-title">Location & Hours</h2>
          <p className="section-desc">
            Conveniently situated in the historic core of Udaipur, overlooking the peaceful waters of Lake Pichola.
          </p>
        </div>

        <div className="location-grid">
          {/* Details Column */}
          <motion.div 
            className="location-details"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Address */}
            <div className="location-block">
              <div className="location-icon-box">
                <MapPin size={22} />
              </div>
              <div className="location-info-text">
                <h3>Our Address</h3>
                <p>
                  Brew & Crust Café<br />
                  12 Heritage Street, Lakeside District<br />
                  Udaipur, Rajasthan, 313001
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="location-block">
              <div className="location-icon-box">
                <Clock size={22} />
              </div>
              <div className="location-info-text">
                <h3>Operating Hours</h3>
                <p>
                  <strong>Monday – Friday:</strong> 08:00 AM – 10:00 PM<br />
                  <strong>Saturday – Sunday:</strong> 07:30 AM – 11:00 PM
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="location-block">
              <div className="location-icon-box">
                <Phone size={22} />
              </div>
              <div className="location-info-text">
                <h3>Reservations & Orders</h3>
                <p>
                  +91 294 249 0789<br />
                  hello@brewandcrust.in
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="map-bg-pattern"></div>
            <div className="map-placeholder">
              <div className="map-circle">
                <Map size={36} style={{ color: 'var(--color-coffee)' }} />
              </div>
              <h3 className="map-title">Brew & Crust Café</h3>
              <p className="map-address">12 Heritage Street, Lakeside District, Udaipur</p>
              <div 
                style={{
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'white',
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '8px 16px',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                Lal Ghat Waterfront
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
