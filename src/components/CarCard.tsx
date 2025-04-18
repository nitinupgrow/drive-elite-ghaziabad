
import React from 'react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-luxury-gray rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-luxury-gold text-luxury-black px-3 py-1 rounded-full text-sm font-semibold">
          ₹{car.pricePerDay}/day
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{car.name}</h3>
        <p className="text-luxury-lightgray mt-1">{car.category}</p>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {car.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="text-xs bg-luxury-black/50 text-luxury-lightgray px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="mt-5">
          <button className="gold-outline-button w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
