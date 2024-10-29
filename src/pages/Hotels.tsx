import { hotels } from '../data';
import HotelCard from '../components/HotelCard';

export default function Hotels() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Hotels</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}