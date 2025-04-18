
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CarCarousel from '../components/CarCarousel';
import BookingForm from '../components/BookingForm';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { cars } from '../data/cars';

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <Navbar />
      <HeroSection />
      <CarCarousel cars={cars} />
      <BookingForm cars={cars} />
      <WhyChooseUs />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
