
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Shield, Award, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-luxury-gold">Drive Elite</span>
            </h1>
            <p className="mt-3 text-luxury-lightgray max-w-2xl mx-auto">
              Redefining the luxury self-drive car rental experience in Ghaziabad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-luxury-lightgray mb-4">
                Founded in 2018, Drive Elite emerged from a simple vision: to make luxury driving experiences accessible to everyone. What began as a small fleet of premium cars has now evolved into Ghaziabad's most trusted luxury self-drive car rental service.
              </p>
              <p className="text-luxury-lightgray mb-4">
                Our founder, a car enthusiast with a passion for exceptional service, noticed a gap in the market for high-quality self-drive rentals. Drive Elite was born from the belief that everyone deserves to experience the thrill of driving a luxury vehicle, even if just for a day.
              </p>
              <p className="text-luxury-lightgray">
                Today, we continue to expand our fleet and services while maintaining our core values: impeccable vehicles, transparent pricing, and customer satisfaction above all.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e8f2e928464?q=80&w=2787&auto=format&fit=crop" 
                alt="Luxury Cars" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-luxury-gray rounded-lg p-6 text-center">
                <div className="bg-luxury-black/50 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safety</h3>
                <p className="text-luxury-lightgray">All our vehicles undergo rigorous maintenance and safety checks before each rental.</p>
              </div>
              
              <div className="bg-luxury-gray rounded-lg p-6 text-center">
                <div className="bg-luxury-black/50 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-luxury-lightgray">We offer only the finest vehicles, maintained to the highest standards.</p>
              </div>
              
              <div className="bg-luxury-gray rounded-lg p-6 text-center">
                <div className="bg-luxury-black/50 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-luxury-lightgray">Punctual delivery, hassle-free pickups, and 24/7 roadside assistance.</p>
              </div>
              
              <div className="bg-luxury-gray rounded-lg p-6 text-center">
                <div className="bg-luxury-black/50 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-luxury-lightgray">Your satisfaction is our priority, from booking to return.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-luxury-gray/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience Luxury Driving?</h2>
            <p className="text-luxury-lightgray mb-6 max-w-2xl mx-auto">
              Book your premium self-drive car today and feel the difference of Drive Elite's exceptional service.
            </p>
            <a href="/#booking" className="gold-button inline-block">Book Now</a>
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
