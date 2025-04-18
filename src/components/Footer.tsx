
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-black border-t border-luxury-gray/30">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-luxury-gold font-playfair">DRIVE ELITE</span>
            </Link>
            <p className="text-luxury-lightgray mb-6">
              Premium self-drive car rentals in Ghaziabad. Experience luxury driving at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-lightgray hover:text-luxury-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-lightgray hover:text-luxury-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-luxury-lightgray hover:text-luxury-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/cars" className="text-luxury-lightgray hover:text-luxury-gold transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link to="/booking" className="text-luxury-lightgray hover:text-luxury-gold transition-colors">Book Now</Link>
              </li>
              <li>
                <Link to="/about" className="text-luxury-lightgray hover:text-luxury-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-luxury-lightgray hover:text-luxury-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-luxury-gold mt-1 mr-3" />
                <div>
                  <p className="text-white">+91 9876543210</p>
                  <p className="text-luxury-lightgray text-sm">Mon-Sun 9am-9pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-luxury-gold mt-1 mr-3" />
                <div>
                  <p className="text-white">info@driveelite.com</p>
                  <p className="text-luxury-lightgray text-sm">Email us anytime</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-luxury-gold mt-1 mr-3" />
                <div>
                  <p className="text-white">Sector 62, Noida</p>
                  <p className="text-luxury-lightgray text-sm">Ghaziabad, UP, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-luxury-lightgray">Monday - Friday:</span>
                <span className="text-white">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-luxury-lightgray">Saturday:</span>
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-luxury-lightgray">Sunday:</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-gray/30 py-6">
        <div className="luxury-container flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-lightgray text-sm">
            © {new Date().getFullYear()} Drive Elite. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-luxury-lightgray text-sm hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-luxury-lightgray text-sm hover:text-luxury-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
