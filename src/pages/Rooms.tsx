
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Single Room",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "₹2,500",
      features: ["Cozy Single Bed", "Workspace Desk", "Free Wi-Fi", "Air Conditioning", "Private Bathroom", "24/7 Room Service"]
    },
    {
      id: 2,
      name: "Family Room",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "₹4,500",
      features: ["Two Double Beds", "Seating Area", "Entertainment System", "Mini Refrigerator", "Spacious Bathroom", "Complimentary Breakfast"]
    },
    {
      id: 3,
      name: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "₹8,500",
      features: ["Luxury Lounge", "Jacuzzi", "24/7 Butler Service", "Premium Amenities", "Separate Living Area", "Panoramic City View"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-800/80 to-blue-900/80 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Rooms & Suites</h1>
            <p className="text-xl">Comfort and luxury in every space</p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Choose Your Perfect Stay</h2>
            <p className="text-xl text-gray-600">Each room is designed for comfort and equipped with modern amenities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800">{room.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-gray-800">{room.price}/night</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-amber-800 mb-4">Ready to Book?</h3>
            <p className="text-xl text-gray-600 mb-8">Contact us directly for the best rates and availability</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <i className="fas fa-phone text-amber-600 mr-3 text-xl"></i>
                <span className="text-lg">+91 9346017770</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-amber-600 mr-3 text-xl"></i>
                <span className="text-lg">reservations.residencyinn@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
