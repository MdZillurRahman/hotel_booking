export const hotels = [
  {
    id: "1",
    name: "Seagull Hotels Ltd.",
    description: "Luxury beachfront resort with panoramic views of the Bay of Bengal",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop",
    rating: 4.8,
    location: "Hotel Motel Zone, Cox's Bazar",
    price: 250,
    amenities: ["Private Beach", "Swimming Pool", "Spa", "Restaurant", "Fitness Center", "WiFi"],
    rooms: [
      {
        id: "1-1",
        type: "Deluxe Ocean View",
        price: 250,
        capacity: 2,
        description: "Spacious room with private balcony and ocean view",
        amenities: ["King Bed", "Ocean View", "Mini Bar", "Room Service"],
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: "1-2",
        type: "Premium Suite",
        price: 400,
        capacity: 4,
        description: "Luxury suite with separate living area and panoramic views",
        amenities: ["2 King Beds", "Living Room", "Jacuzzi", "Butler Service"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "2",
    name: "Long Beach Hotel",
    description: "Modern luxury hotel with direct beach access",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    location: "Kolatoli Road, Cox's Bazar",
    price: 200,
    amenities: ["Beach Access", "Rooftop Pool", "Multiple Restaurants", "Bar", "WiFi"],
    rooms: [
      {
        id: "2-1",
        type: "Superior Room",
        price: 200,
        capacity: 2,
        description: "Comfortable room with modern amenities",
        amenities: ["Queen Bed", "City View", "Mini Fridge", "WiFi"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: "2-2",
        type: "Executive Suite",
        price: 350,
        capacity: 3,
        description: "Spacious suite with separate working area",
        amenities: ["King Bed", "Work Desk", "Lounge Area", "Premium Amenities"],
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2074&auto=format&fit=crop"
      }
    ]
  }
];

export const touristSpots = [
  {
    id: "1",
    name: "Inani Beach",
    description: "Beautiful natural beach with unique coral boulders",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    location: "32 km south of Cox's Bazar"
  },
  {
    id: "2",
    name: "Himchari National Park",
    description: "Scenic park featuring waterfalls and diverse wildlife",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
    location: "5 km south of Cox's Bazar"
  },
  {
    id: "3",
    name: "Marine Drive",
    description: "Scenic coastal road connecting Cox's Bazar to Teknaf",
    image: "https://images.unsplash.com/photo-1621789098261-433181d687c9?q=80&w=2072&auto=format&fit=crop",
    location: "Cox's Bazar to Teknaf"
  }
];