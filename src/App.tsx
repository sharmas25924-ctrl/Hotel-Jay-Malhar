import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { AIAssistant } from './components/AIAssistant';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className={`font-serif text-3xl transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            Jay Malhar
          </a>
          <div className={`hidden md:flex gap-12 font-medium text-sm uppercase tracking-widest ${
            isScrolled ? 'text-brand-dark' : 'text-white'
          }`}>
            <a href="#" className="hover:text-brand-orange transition-colors">Home</a>
            <a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a>
            <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
            <a href="#reservation" className="hover:text-brand-orange transition-colors">Reservation</a>
          </div>
          <a
            href="#reservation"
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              isScrolled 
                ? 'bg-brand-dark text-white hover:bg-brand-orange' 
                : 'bg-white text-brand-dark hover:bg-brand-orange hover:text-white'
            }`}
          >
            Book Now
          </a>
        </div>
      </nav>

      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-brand-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
              alt="Chef cooking"
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-orange rounded-3xl -z-0 opacity-20" />
          </div>
          <div>
            <span className="text-brand-orange uppercase tracking-widest text-xs font-bold mb-4 block">Our Story</span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">A Legacy of Spices & Tradition</h2>
            <div className="space-y-6 text-brand-dark/70 leading-relaxed">
              <p>
                Hotel Jay Malhar was born from a simple desire: to bring the authentic, robust flavors of rural Maharashtra to the discerning palate. Our journey began in a small kitchen with recipes passed down through generations.
              </p>
              <p>
                Today, we take pride in using only the finest locally sourced ingredients and hand-ground spices to create dishes that are not just meals, but experiences. From our signature Mutton Thali to the humble Pithla Bhakri, every bite is a tribute to our heritage.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif text-brand-orange mb-1">15+</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Years of Heritage</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-brand-orange mb-1">50+</p>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Authentic Recipes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Menu />

      {/* Reservation Section */}
      <section id="reservation" className="py-24 px-6 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-6">Make a Reservation</h2>
          <p className="text-white/60 mb-12 max-w-xl mx-auto">
            Join us for an unforgettable dining experience. Whether it's a family dinner or a special celebration, we're ready to host you.
          </p>
          
          <form className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Phone Number</label>
              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="+91 00000 00000" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Date</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Guests</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all">
                <option className="bg-brand-dark">2 People</option>
                <option className="bg-brand-dark">4 People</option>
                <option className="bg-brand-dark">6+ People</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Special Requests</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all h-32" placeholder="Any dietary preferences or special occasions?"></textarea>
            </div>
            <button className="md:col-span-2 bg-brand-orange text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-orange/90 transition-all mt-4">
              Confirm Booking
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 px-6 border-t border-brand-olive/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h3 className="font-serif text-4xl mb-6">Jay Malhar</h3>
            <p className="text-brand-dark/60 max-w-sm mb-8">
              Preserving the soul of Maharashtrian cuisine through authentic flavors and heartfelt hospitality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-olive/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-olive/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-olive/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-dark/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-orange shrink-0" />
                <span>Hotel Jay Malhar,Opp.Hp Petrol Pump,Marunji Goan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange shrink-0" />
                <span>+91 9923751248</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-orange shrink-0" />
                <span>hoteljaymalhar7373@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Hours</h4>
            <ul className="space-y-4 text-sm text-brand-dark/70">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span>10:00 - 00:00</span>
              </li>
              <li className="flex items-center gap-3 mt-6 text-brand-orange font-medium">
                <Clock size={18} />
                <span>Open Now</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-olive/10 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold opacity-40">
          <p>© 2024 Hotel Jay Malhar. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
}
