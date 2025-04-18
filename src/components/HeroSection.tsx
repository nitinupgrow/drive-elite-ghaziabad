
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2664&auto=format&fit=crop')", 
          filter: "brightness(0.6)"
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Drive <span className="text-luxury-gold">Luxury</span>, On Your Terms.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mt-4 max-w-2xl mx-auto">
            Premium Self-Drive Car Rentals in Ghaziabad
          </p>
          <div className="mt-8">
            <button onClick={() => scrollToSection('booking')} className="gold-button text-lg">
              Book Your Ride
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('cars')}
          className="text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="mb-2 text-sm">Discover Our Fleet</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
