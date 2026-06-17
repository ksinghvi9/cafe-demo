import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Calendar as CalIcon, Clock, Users, CheckCircle, Info, MapPin } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^[6-9]\d{9}$/; // Indian phone number format
      if (!phoneRegex.test(formData.phone.trim())) {
        tempErrors.phone = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (!formData.date) {
      tempErrors.date = 'Reservation date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        tempErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) {
      tempErrors.time = 'Reservation time is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid - trigger success state
      setIsSubmitted(true);
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    // Reset form data
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2'
    });
  };

  // Get current date string in YYYY-MM-DD format for date input minimum limit
  const getTodayString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <section id="reservations" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Secure Your Spot</span>
          <h2 className="section-title">Book a Table</h2>
          <p className="section-desc">
            Skip the queue and secure Udaipur's finest lakeside table. Perfect for romantic dates, work meetups, or family gatherings.
          </p>
        </div>

        <div className="reservation-box glass-panel-dark">
          {/* Info Side */}
          <div className="reservation-info">
            <div>
              <h3 className="res-info-title">Reservation Details</h3>
              <p className="res-info-desc">
                Please fill out the form to request a reservation. For parties larger than 10 people, please call our booking desk directly.
              </p>
            </div>

            <div className="res-details-list">
              <div className="res-details-item">
                <Info className="res-details-icon" />
                <div className="res-details-text">
                  <h4>Booking Policy</h4>
                  <p>Tables are held for a maximum of 15 minutes past reservation time.</p>
                </div>
              </div>
              <div className="res-details-item">
                <MapPin className="res-details-icon" />
                <div className="res-details-text">
                  <h4>Lakeside Seating</h4>
                  <p>Lakeside deck seating is subject to availability upon arrival.</p>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: '13px', color: 'var(--color-gold)', fontWeight: 500 }}>
                Questions? Call us: +91 294 249 0789
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="reservation-form-container">
            <form onSubmit={handleSubmit} className="res-form" noValidate>
              
              {/* Name */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="res-name">Full Name</label>
                <div className="form-input-wrapper">
                  <User size={16} className="form-input-icon" />
                  <input
                    type="text"
                    id="res-name"
                    name="name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="res-phone">Phone Number</label>
                <div className="form-input-wrapper">
                  <Phone size={16} className="form-input-icon" />
                  <input
                    type="tel"
                    id="res-phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
              </div>

              {/* Date */}
              <div className="form-group">
                <label className="form-label" htmlFor="res-date">Date</label>
                <div className="form-input-wrapper">
                  <CalIcon size={16} className="form-input-icon" />
                  <input
                    type="date"
                    id="res-date"
                    name="date"
                    min={getTodayString()}
                    className={`form-input ${errors.date ? 'error' : ''}`}
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                {errors.date && <span className="form-error-msg">{errors.date}</span>}
              </div>

              {/* Time */}
              <div className="form-group">
                <label className="form-label" htmlFor="res-time">Time</label>
                <div className="form-input-wrapper">
                  <Clock size={16} className="form-input-icon" />
                  <select
                    id="res-time"
                    name="time"
                    className={`form-input ${errors.time ? 'error' : ''}`}
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="">Select Time</option>
                    <option value="08:00 AM">08:00 AM (Breakfast)</option>
                    <option value="09:30 AM">09:30 AM (Breakfast)</option>
                    <option value="11:00 AM">11:00 AM (Brunch)</option>
                    <option value="12:30 PM">12:30 PM (Lunch)</option>
                    <option value="02:00 PM">02:00 PM (Lunch)</option>
                    <option value="04:00 PM">04:00 PM (High Tea)</option>
                    <option value="05:30 PM">05:30 PM (Sunset Tea)</option>
                    <option value="07:00 PM">07:00 PM (Dinner)</option>
                    <option value="08:30 PM">08:30 PM (Dinner)</option>
                  </select>
                </div>
                {errors.time && <span className="form-error-msg">{errors.time}</span>}
              </div>

              {/* Guests */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="res-guests">Number of Guests</label>
                <div className="form-input-wrapper">
                  <Users size={16} className="form-input-icon" />
                  <select
                    id="res-guests"
                    name="guests"
                    className="form-input"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="9">9 Guests</option>
                    <option value="10">10 Guests (Max)</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary res-submit-btn"
              >
                Confirm Booking Request
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="success-modal glass-panel"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className="success-icon-box">
                <CheckCircle size={44} />
              </div>
              <h3 className="success-title">Table Requested!</h3>
              <p className="success-text">
                Thank you, <strong>{formData.name}</strong>. We have received your request for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>. <br /><br />
                A confirmation SMS has been sent to <strong>+91 {formData.phone}</strong>.
              </p>
              <button 
                className="btn btn-dark" 
                onClick={handleCloseModal}
                style={{ width: '100%' }}
              >
                Back to Website
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reservation;
