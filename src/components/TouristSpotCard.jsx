export default function TouristSpotCard({ spot }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48">
        <img
          src={spot.image}
          alt={spot.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{spot.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{spot.location}</p>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{spot.description}</p>
      </div>
    </div>
  );
}