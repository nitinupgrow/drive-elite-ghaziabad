
export interface Car {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV' | 'Luxury';
  pricePerDay: number;
  image: string;
  features: string[];
}
