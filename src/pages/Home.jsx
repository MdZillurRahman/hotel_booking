import { MapPin } from 'lucide-react';
import { hotels, touristSpots } from '../data';
import HotelCard from '../components/HotelCard';
import TouristSpotCard from '../components/TouristSpotCard';

export default function Home() {
  const featuredHotels = hotels.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1589818317475-644d8798b4c6?q=80&w=2070&auto=format&fit=crop")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Cox's Bazar
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience the world's longest natural sea beach
            </p>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">Cox's Bazar, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Hotels Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Hotels</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>

      {/* Tourist Spots Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Tourist Spots</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {touristSpots.map(spot => (
              <TouristSpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}