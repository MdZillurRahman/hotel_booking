export interface Hotel {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  price: number;
  amenities: string[];
  rooms: Room[];
}

export interface Room {
  id: string;
  type: string;
  price: number;
  capacity: number;
  description: string;
  amenities: string[];
  image: string;
}

export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
}