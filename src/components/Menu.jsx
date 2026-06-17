import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Zap, Heart } from 'lucide-react';

// Image imports
import cappuccinoImg from '../assets/cappuccino.jpg';
import vanillaLatteImg from '../assets/vanilla_latte.jpg';
import coldBrewImg from '../assets/cold_brew.jpg';
import avocadoToastImg from '../assets/avocado_toast.jpg';
import mediterraneanSandwichImg from '../assets/mediterranean_sandwich.jpg';
import truffleFriesImg from '../assets/truffle_fries.jpg';
import belgianWaffleImg from '../assets/belgian_waffle.jpg';
import chocolateBrownieImg from '../assets/chocolate_brownie.jpg';
import blueberryCheesecakeImg from '../assets/blueberry_cheesecake.jpg';

const menuItems = [
  {
    id: 1,
    category: 'coffee',
    title: 'Signature Cappuccino',
    price: '₹180',
    description: 'Double shot of single-origin espresso, sweet textured microfoam, finished with a dust of rich cocoa powder.',
    image: cappuccinoImg,
    badge: 'Signature',
    icon: <Award size={14} />
  },
  {
    id: 2,
    category: 'coffee',
    title: 'Vanilla Latte',
    price: '₹210',
    description: 'Velvety espresso blended with steamed organic milk and premium organic Madagascar vanilla bean syrup.',
    image: vanillaLatteImg,
    badge: 'Popular',
    icon: <Heart size={14} />
  },
  {
    id: 3,
    category: 'coffee',
    title: 'House Cold Brew',
    price: '₹190',
    description: 'Our beans steeped in cold water for 18 hours, yielding an exceptionally smooth, low-acid, highly caffeinated cup.',
    image: coldBrewImg,
    badge: 'Crafted',
    icon: <Zap size={14} />
  },
  {
    id: 4,
    category: 'food',
    title: 'Artisan Avocado Toast',
    price: '₹280',
    description: 'Freshly smashed avocado, marinated heirloom cherry tomatoes, crumbled Danish feta, and sunflower seeds on 24h fermented sourdough.',
    image: avocadoToastImg,
    badge: 'Signature',
    icon: <Award size={14} />
  },
  {
    id: 5,
    category: 'food',
    title: 'Mediterranean Sandwich',
    price: '₹260',
    description: 'Grilled bell peppers, sundried tomatoes, fresh basil pesto, and fresh mozzarella cheese grilled on fresh focaccia crust.',
    image: mediterraneanSandwichImg,
    badge: 'Fresh',
    icon: <Heart size={14} />
  },
  {
    id: 6,
    category: 'food',
    title: 'Truffle Fries',
    price: '₹170',
    description: 'Crisp hand-cut potatoes tossed in premium white truffle oil, rosemary sea salt, and grated aged parmesan.',
    image: truffleFriesImg,
    badge: 'Classic',
    icon: <Zap size={14} />
  },
  {
    id: 7,
    category: 'dessert',
    title: 'Classic Belgian Waffle',
    price: '₹220',
    description: 'Fluffy, pearl sugar waffle served warm, topped with whipped butter, fresh seasonal berries, and premium organic maple syrup.',
    image: belgianWaffleImg,
    badge: 'Warm Out of Oven',
    icon: <Zap size={14} />
  },
  {
    id: 8,
    category: 'dessert',
    title: 'Fudge Chocolate Brownie',
    price: '₹180',
    description: 'Extremely rich, warm double chocolate chunk brownie served with a scoop of Madagascar vanilla bean gelato.',
    image: chocolateBrownieImg,
    badge: 'Decadent',
    icon: <Heart size={14} />
  },
  {
    id: 9,
    category: 'dessert',
    title: 'Blueberry Cheesecake',
    price: '₹260',
    description: 'Creamy New York-style baked cheesecake on a buttered graham cracker crust, topped with fresh blueberry compote and mint leaf.',
    image: blueberryCheesecakeImg,
    badge: 'Signature',
    icon: <Award size={14} />
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Specially Curated</span>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-desc text-muted">
            Each cup is pulled from freshly roasted beans and each dish is crafted by hand using organic local ingredients in Udaipur.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="menu-tabs">
          {['all', 'coffee', 'food', 'dessert'].map((category) => (
            <button
              key={category}
              className={`menu-tab-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'All Items' : category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          className="menu-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="menu-card"
              >
                <div className="menu-card-img-wrapper">
                  {item.badge && (
                    <div className="menu-card-badge">
                      {item.badge}
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="menu-card-img" 
                    loading="lazy"
                  />
                </div>
                
                <div className="menu-card-info">
                  <div className="menu-card-header">
                    <h3 className="menu-card-title">{item.title}</h3>
                    <span className="menu-card-price">{item.price}</span>
                  </div>
                  <p className="menu-card-desc">{item.description}</p>
                  
                  <div className="menu-card-footer">
                    {item.icon}
                    <span>{item.badge} Choice</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
