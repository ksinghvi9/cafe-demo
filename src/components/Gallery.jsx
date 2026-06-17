import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Image imports
import heroBg from '../assets/hero_bg.jpg';
import aboutCafe from '../assets/about_cafe.jpg';
import cappuccino from '../assets/cappuccino.jpg';
import avocadoToast from '../assets/avocado_toast.jpg';
import galleryInterior from '../assets/gallery_interior.jpg';
import galleryPastry from '../assets/gallery_pastry.jpg';
import galleryBarista from '../assets/gallery_barista.jpg';
import galleryLakeside from '../assets/gallery_lakeside.jpg';

const galleryItems = [
  {
    id: 1,
    category: 'interiors',
    title: 'Sunset Terrace View',
    image: galleryLakeside,
    size: 'size-lg'
  },
  {
    id: 2,
    category: 'coffee',
    title: 'Artisanal Pour-Over',
    image: aboutCafe,
    size: 'size-sm'
  },
  {
    id: 3,
    category: 'interiors',
    title: 'The Vintage Library Nook',
    image: galleryInterior,
    size: 'size-md'
  },
  {
    id: 4,
    category: 'coffee',
    title: 'Perfect Rosetta Art',
    image: cappuccino,
    size: 'size-sm'
  },
  {
    id: 5,
    category: 'food',
    title: 'Lakeside Avocado Toast',
    image: avocadoToast,
    size: 'size-sm'
  },
  {
    id: 6,
    category: 'food',
    title: 'Freshly Baked Pastries',
    image: galleryPastry,
    size: 'size-md'
  },
  {
    id: 7,
    category: 'coffee',
    title: 'Crafting Espresso Crema',
    image: galleryBarista,
    size: 'size-sm'
  },
  {
    id: 8,
    category: 'people',
    title: 'Cozy Evening Catch-ups',
    image: heroBg,
    size: 'size-md'
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Visual Story</span>
          <h2 className="section-title">Café Gallery</h2>
          <p className="section-desc">
            A visual glimpse into our daily craft, premium ingredients, warm heritage interiors, and beautiful lakeside views.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="gallery-filter">
          {['all', 'coffee', 'food', 'interiors', 'people'].map((category) => (
            <button
              key={category}
              className={`menu-tab-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div className="gallery-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`gallery-item ${item.size}`}
                onClick={() => setSelectedImage(item)}
              >
                <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
                <div className="gallery-overlay">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                    <div>
                      <span className="gallery-category">{item.category}</span>
                      <h3 className="gallery-title">{item.title}</h3>
                    </div>
                    <div className="why-icon-box" style={{ width: '40px', height: '40px', margin: 0, backgroundColor: 'var(--color-coffee)', color: 'white' }}>
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="lightbox-close" 
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-img" />
              <div className="lightbox-caption">{selectedImage.title}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
