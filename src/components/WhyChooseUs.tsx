
import React from 'react';
import { Check, Clock, PhoneCall, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Check className="w-8 h-8 text-luxury-gold" />,
    title: "Sanitized Cars",
    description: "All our vehicles are thoroughly sanitized before each rental for your safety and comfort."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-luxury-gold" />,
    title: "No Hidden Charges",
    description: "We believe in complete transparency. What you see is what you pay."
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-luxury-gold" />,
    title: "24/7 Customer Support",
    description: "Our support team is always available to assist you, day or night."
  },
  {
    icon: <Clock className="w-8 h-8 text-luxury-gold" />,
    title: "Affordable Luxury",
    description: "Experience premium cars at competitive rates that won't break the bank."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-luxury-black">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-luxury-gold">Choose</span> Us
          </h2>
          <p className="mt-2 text-luxury-lightgray max-w-2xl mx-auto">
            We go above and beyond to ensure you have the best driving experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-luxury-gray p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-luxury-gray/30"
            >
              <div className="bg-luxury-black/50 p-4 rounded-full inline-flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-luxury-lightgray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
