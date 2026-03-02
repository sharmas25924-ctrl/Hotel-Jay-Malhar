import React from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS } from '../types';

export const Menu = () => {
  const categories = ['Thali', 'Main Course', 'Starters', 'Desserts', 'Beverages'];
  const [activeCategory, setActiveCategory] = React.useState('Thali');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif mb-4">Our Menu</h2>
          <p className="text-brand-olive font-serif italic">A journey through the heart of Maharashtra</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-brand-olive text-white border-brand-olive'
                  : 'border-brand-olive/20 text-brand-olive hover:border-brand-olive'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 group"
            >
              <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 border-b border-brand-olive/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif">
                    {item.name}
                    {item.isSpecial && (
                      <span className="ml-2 text-[10px] uppercase tracking-widest bg-brand-orange text-white px-2 py-0.5 rounded-full align-middle">
                        Special
                      </span>
                    )}
                  </h3>
                  <span className="font-serif text-xl text-brand-orange">{item.price}</span>
                </div>
                <p className="text-brand-dark/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
