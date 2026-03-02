import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Clock, MapPin, Phone } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          alt="Restaurant Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-orange uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
            Authentic Maharashtrian Taste
          </span>
          <h1 className="text-7xl md:text-9xl text-white font-serif mb-8 leading-tight">
            Hotel Jay Malhar
          </h1>
          <p className="text-white/80 text-xl font-serif italic mb-12 max-w-2xl mx-auto">
            Experience the rich heritage of Gavran flavors, where every spice tells a story of tradition and love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#menu"
              className="bg-brand-orange text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-brand-orange/90 transition-all transform hover:scale-105"
            >
              Explore Menu
            </a>
            <a
              href="#reservation"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
            >
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Quick Info Bar */}
      <div className="absolute bottom-12 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 py-8 border-t border-white/20">
            <div className="flex items-center gap-4 text-white/90">
              <Clock className="text-brand-orange" size={20} />
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Opening Hours</p>
                <p className="text-sm font-medium">11:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <MapPin className="text-brand-orange" size={20} />
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Location</p>
                <p className="text-sm font-medium">Marunji Goan</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <Phone className="text-brand-orange" size={20} />
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Reservations</p>
                <p className="text-sm font-medium">+91 9923751248</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <Utensils className="text-brand-orange" size={20} />
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Cuisine</p>
                <p className="text-sm font-medium">Pure Maharashtrian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
