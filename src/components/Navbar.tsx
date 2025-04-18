
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-luxury-black/95 shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="luxury-container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-luxury-gold font-playfair">DRIVE ELITE</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-luxury-gold transition-colors">Home</Link>
          <Link to="/cars" className="text-white hover:text-luxury-gold transition-colors">Our Fleet</Link>
          <Link to="/booking" className="text-white hover:text-luxury-gold transition-colors">Book Now</Link>
          <Link to="/about" className="text-white hover:text-luxury-gold transition-colors">About Us</Link>
          <Link to="/contact" className="text-white hover:text-luxury-gold transition-colors">Contact</Link>
          <a href="tel:+919876543210" className="flex items-center text-luxury-gold">
            <Phone size={18} className="mr-2" />
            <span>+91 9876543210</span>
          </a>
        </div>

        {/* Mobile Nav Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-luxury-black/95 animate-fade-in">
          <div className="luxury-container py-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-luxury-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/cars" className="text-white hover:text-luxury-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Our Fleet</Link>
            <Link to="/booking" className="text-white hover:text-luxury-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
            <Link to="/about" className="text-white hover:text-luxury-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="text-white hover:text-luxury-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="tel:+919876543210" className="flex items-center text-luxury-gold py-2">
              <Phone size={18} className="mr-2" />
              <span>+91 9876543210</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
