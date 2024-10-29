import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Hotel } from '../types';

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <Link to={`/hotel/${hotel.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-[1.02]">
        <div className="relative h-48 w-full">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{hotel.rating}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{hotel.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{hotel.location}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-blue-600 font-bold">${hotel.price}</p>
            <p className="text-sm text-gray-500">per night</p>
          </div>
        </div>
      </div>
    </Link>
  );
}