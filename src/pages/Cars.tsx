
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const Cars = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-luxury-gold">Fleet</span>
            </h1>
            <p className="mt-3 text-luxury-lightgray max-w-2xl mx-auto">
              Explore our collection of premium vehicles available for self-drive rental
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Cars;
