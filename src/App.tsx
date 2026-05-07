/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Heart,
  Store,
  Utensils
} from 'lucide-react';
import { useRef, useState } from 'react';
import logoImageUrl from './WhatsApp_Image_2026-05-07_at_21.53.28-removebg-preview.png';
import showcaseCakeImageUrl from './WhatsApp Image 2026-05-05 at 20.14.43.jpeg';

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src={logoImageUrl}
        alt="Mahapadam Sweets logo"
        className="h-24 w-auto object-contain"
      />
    </div>
  );
}

export default function App() {
  const containerRef = useRef(null);
  const [showPhoneInHeader, setShowPhoneInHeader] = useState(false);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream overflow-x-hidden selection:bg-brand-pink selection:text-white">
      {/* Navigation - Centered Logo Only */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-pink/10">
        <div className="max-w-7xl mx-auto px-6 h-28 grid grid-cols-3 items-center">
           <div />
           <div className="flex justify-center">
             <Logo className="scale-75" />
           </div>
           <div className="flex justify-end">
             <button
               type="button"
               onClick={() => setShowPhoneInHeader((prev) => !prev)}
               className="inline-flex items-center gap-2 rounded-full bg-brand-pink text-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow hover:bg-brand-pink/90 transition-colors"
             >
               <Phone size={14} />
               Contact Us
             </button>
             {showPhoneInHeader && (
               <span className="ml-3 self-center text-sm font-bold text-brand-dark">
                 +91 9415552777
               </span>
             )}
           </div>
        </div>
      </nav>

      {/* Hero Section - About Us Focus */}
      <section className="relative pt-48 pb-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-bold uppercase tracking-[0.2em]"
          >
            <Star size={16} fill="currentColor" />
            Celebrating 10 Years of Sweetness
          </motion.div>
          
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-sans uppercase tracking-[0.4em] text-brand-green font-black"
            >
              Our Heritage
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tight text-brand-dark"
            >
              A Symphony of <br/>
              <span className="text-brand-pink italic underline decoration-brand-yellow/30">Pure Devotion.</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8 text-xl text-brand-dark/80 font-brand max-w-2xl mx-auto leading-relaxed text-left md:text-center"
          >
            <p>
              Founded a decade ago with a simple mission: to preserve the soul of traditional Indian confectionery while embracing the art of modern baking. At Mahapadam, every sweet is a testament to our commitment to purity.
            </p>
            <p>
              We believe that true flavor comes from the heart. That's why we use only the finest handpicked ingredients—pure gold-standard ghee, saffron from the valleys, and milk sourced from local farms. No shortcuts, no compromises.
            </p>
          </motion.div>
        </div>

        {/* Visual Storytelling */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mt-24 max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-white group">
              <img 
                src={showcaseCakeImageUrl}
                alt="Traditional Sweets" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-8 bottom-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl">
                <h4 className="text-brand-pink font-serif text-2xl font-bold">The Artisanal Touch</h4>
                <p className="text-brand-dark/60 text-sm mt-1">Every sweet hand-rolled by master halwais.</p>
              </div>
            </div>
            
            <div className="grid gap-8">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border-2 border-white group">
                <img 
                  src={showcaseCakeImageUrl}
                  alt="Bakery Fresh" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="bg-brand-pink p-12 rounded-3xl text-white flex flex-col justify-center gap-4 shadow-xl">
                 <h4 className="text-3xl font-serif font-bold">Beyond the Recipe</h4>
                 <p className="text-white/80 font-brand text-lg">It’s about the memories we create. Whether it’s a morning croissant or a wedding platter, we are part of your life's sweetest chapters.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats/Badges */}
      <section className="bg-brand-pink py-16 px-6 border-y-8 border-brand-yellow">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-12 text-center">
          {[
            { label: 'Pure Ingredients', icon: Heart, detail: '100% Ghee & Organic Saffron' },
            { label: 'Legacy Recipes', icon: Star, detail: 'Passed down through decades' },
            { label: 'Hygienic Craft', icon: Utensils, detail: 'Gold-standard safety protocols' },
            { label: 'Innovation', icon: Store, detail: 'Blending traditions with trends' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 text-white max-w-[200px]"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2 border border-white/30">
                <stat.icon size={28} />
              </div>
              <div className="space-y-1">
                <span className="font-bold tracking-widest text-xs uppercase block">{stat.label}</span>
                <span className="text-[10px] text-white/60 uppercase">{stat.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-cream border-t-2 border-brand-pink/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-20 text-center md:text-left">
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={logoImageUrl}
                alt="Mahapadam Sweets logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-brand-dark/50 leading-loose">
              Sharing the authentic taste of tradition since 2014. Your destination for the finest sweets and artisanal bakery delights.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-green text-center md:text-left">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-dark/70">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-brand-pink shrink-0" />
                <span>60 Feet Road, Jankipuram Vistar, Lucknow</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-brand-pink" />
                <span>+91 9415552777</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-green text-center md:text-left">Open Hours</h4>
            <ul className="space-y-4 text-sm text-brand-dark/70">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Clock size={18} className="text-brand-pink" />
                <span>7AM to 11PM (All 7 Days)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-brand-pink/10 flex items-center justify-center gap-6 text-[10px] uppercase font-bold tracking-widest text-brand-dark/40">
           <p>© 2024 Mahapadam Sweets & Bakery. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
