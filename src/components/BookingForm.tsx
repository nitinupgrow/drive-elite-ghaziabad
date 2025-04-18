
import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Car } from '../types';

interface BookingFormProps {
  cars: Car[];
}

const BookingForm: React.FC<BookingFormProps> = ({ cars }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupDate: '',
    dropoffDate: '',
    carId: '',
    pickupLocation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          pickupDate: '',
          dropoffDate: '',
          carId: '',
          pickupLocation: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-luxury-black to-luxury-gray">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Book Your <span className="text-luxury-gold">Luxury</span> Experience
          </h2>
          <p className="mt-2 text-luxury-lightgray max-w-2xl mx-auto">
            Reserve your premium self-drive car in minutes with our simple booking process
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2574&auto=format&fit=crop" 
              alt="Customer receiving car keys" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right Side - Form */}
          <div className="bg-luxury-gray/50 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl">
            {showConfirmation ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Booking Confirmed!</h3>
                <p className="text-luxury-lightgray">
                  Thank you for your booking. We'll contact you shortly with confirmation details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-luxury-black/50 text-white border border-luxury-gray rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-luxury-black/50 text-white border border-luxury-gray rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-luxury-black/50 text-white border border-luxury-gray rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block text-white mb-2">Pickup Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        required
                        className="w-full bg-luxury-black/50 text-white border border-luxury-gray rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                      />
                      <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-luxury-lightgray pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-white mb-2">Drop-off Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="dropoffDate"
                        value={formData.dropoffDate}
                        onChange={handleChange}
                        required
                        className="w-full bg-luxury-black/50 text-white border border-luxury-gray rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                      />
                      <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-luxury-lightgray pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2">Select Car</label>
                  <select
                    name="carId"
                    value={formData.carId}
                    onChange={handleChange}
                    required
                    className="w-full bg-luxury-black/50 text-white border border-luxury-gray rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all appearance-none"
                  >
                    <option value="">Select a car</option>
                    {cars.map(car => (
                      <option key={car.id} value={car.id}>
                        {car.name} - ₹{car.pricePerDay}/day
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <label className="block text-white mb-2">Pickup Location</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      required
                      className="w-full bg-luxury-black/50 text-white border border-luxury-gray rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-luxury-gold transition-all"
                      placeholder="Enter pickup address"
                    />
                    <MapPin className="absolute right-3 top-3.5 h-5 w-5 text-luxury-lightgray pointer-events-none" />
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gold-button w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-luxury-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : "Book Now"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
