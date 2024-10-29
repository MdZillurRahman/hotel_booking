import { useParams } from 'react-router-dom';
import { Star, Wifi, Coffee, Dumbbell, Utensils, Users } from 'lucide-react';
import { hotels } from '../data';

export default function HotelDetail() {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === id);

  if (!hotel) {
    return <div className="min-h-screen flex items-center justify-center">Hotel not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hotel Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{hotel.rating}</span>
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{hotel.name}</h1>
            <p className="text-gray-600 mt-2">{hotel.location}</p>
            <p className="text-gray-700 mt-4">{hotel.description}</p>
            
            {/* Amenities */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {amenity.includes('WiFi') && <Wifi className="h-5 w-5 text-blue-600" />}
                    {amenity.includes('Restaurant') && <Utensils className="h-5 w-5 text-blue-600" />}
                    {amenity.includes('Fitness') && <Dumbbell className="h-5 w-5 text-blue-600" />}
                    <span className="text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Rooms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {hotel.rooms.map(room => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{room.type}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">${room.price}</p>
                    <p className="text-sm text-gray-500">per night</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <Users className="h-5 w-5" />
                  <span>Up to {room.capacity} guests</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}