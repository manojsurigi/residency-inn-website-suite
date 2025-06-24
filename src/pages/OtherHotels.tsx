
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const OtherHotels = () => {
  const otherHotels = [
    {
      id: 1,
      name: "The Rose Grand Hotel",
      location: "Jubilee Hills, Hyderabad",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Luxury 5-star hotel with premium amenities and world-class service in the heart of Jubilee Hills.",
      features: ["5-Star Luxury", "Spa & Wellness", "Conference Halls", "Fine Dining"],
      phone: "+91 9876543210",
      email: "reservations.grand@gmail.com",
      status: "Opening Soon"
    },
    {
      id: 2,
      name: "Rose Business Suites",
      location: "HITEC City, Hyderabad",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Modern business hotel designed for corporate travelers with state-of-the-art facilities.",
      features: ["Business Center", "Meeting Rooms", "Airport Shuttle", "Express Check-in"],
      phone: "+91 9876543211",
      email: "business.suites@gmail.com",
      status: "Coming 2025"
    },
    {
      id: 3,
      name: "Rose Heritage Inn",
      location: "Old City, Hyderabad",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Experience the rich heritage of Hyderabad with traditional architecture and modern comfort.",
      features: ["Heritage Design", "Cultural Tours", "Traditional Cuisine", "Historic Location"],
      phone: "+91 9876543212",
      email: "heritage.inn@gmail.com",
      status: "Planning Phase"
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Hotel Network</h1>
            <p className="text-xl">Expanding luxury and comfort across Hyderabad</p>
          </div>
        </div>
      </section>

      {/* Current Hotel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Currently Operating</h2>
            <p className="text-xl text-gray-600">Your trusted choice for comfortable stays</p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="The Rose Residency Inn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-amber-800">The Rose Residency Inn</CardTitle>
                  <CardDescription className="text-lg">Banjara Hills, Hyderabad</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-6">
                    Our flagship property offering affordable luxury with personalized service in the prestigious Banjara Hills area.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-green-600">
                      <i className="fas fa-check mr-2"></i>
                      <span className="text-sm">Now Open</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-star mr-2"></i>
                      <span className="text-sm">Premium Service</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-wifi mr-2"></i>
                      <span className="text-sm">Free Wi-Fi</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-car mr-2"></i>
                      <span className="text-sm">Free Parking</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-gray-600">
                      <i className="fas fa-phone mr-2"></i>+91 9346017770
                    </p>
                    <p className="text-sm text-gray-600">
                      <i className="fas fa-envelope mr-2"></i>reservations.residencyinn@gmail.com
                    </p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Book Now
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Upcoming Hotels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Expanding Soon</h2>
            <p className="text-xl text-gray-600">More locations to serve you better</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      hotel.status === 'Opening Soon' ? 'bg-amber-100 text-amber-800' :
                      hotel.status === 'Coming 2025' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {hotel.status}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800">{hotel.name}</CardTitle>
                  <CardDescription className="text-gray-600">{hotel.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{hotel.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-600">
                      <i className="fas fa-phone mr-2"></i>{hotel.phone}
                    </p>
                    <p className="text-sm text-gray-600">
                      <i className="fas fa-envelope mr-2"></i>{hotel.email}
                    </p>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      hotel.status === 'Opening Soon' 
                        ? 'bg-amber-600 hover:bg-amber-700' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={hotel.status !== 'Opening Soon'}
                  >
                    {hotel.status === 'Opening Soon' ? 'Pre-Book Now' : 'Coming Soon'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Stay Updated</CardTitle>
              <CardDescription>Be the first to know about our new hotel openings and special offers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherHotels;
