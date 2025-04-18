
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarCard from './CarCard';
import { Car } from '../types';

interface CarCarouselProps {
  cars: Car[];
}

const CarCarousel: React.FC<CarCarouselProps> = ({ cars }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cars" className="py-20 bg-luxury-black">
      <div className="luxury-container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our <span className="text-luxury-gold">Premium</span> Fleet
            </h2>
            <p className="mt-2 text-luxury-lightgray">Experience the luxury of driving these exceptional cars</p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="bg-luxury-gray p-3 rounded-full text-white hover:bg-luxury-gold hover:text-luxury-black transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="bg-luxury-gray p-3 rounded-full text-white hover:bg-luxury-gold hover:text-luxury-black transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
        >
          {cars.map((car) => (
            <div key={car.id} className="min-w-[300px] md:min-w-[350px] snap-start">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCarousel;
