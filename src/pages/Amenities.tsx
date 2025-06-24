
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Amenities = () => {
  const amenities = [
    {
      icon: "fas fa-wifi",
      title: "Free High-Speed Wi-Fi",
      description: "Stay connected with complimentary high-speed internet throughout the hotel"
    },
    {
      icon: "fas fa-utensils",
      title: "Complimentary Breakfast",
      description: "Start your day with a delicious continental and Indian breakfast"
    },
    {
      icon: "fas fa-concierge-bell",
      title: "24/7 Front Desk",
      description: "Our friendly staff is always available to assist you"
    },
    {
      icon: "fas fa-room-service",
      title: "24/7 Room Service",
      description: "Enjoy meals and refreshments delivered to your room anytime"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security & Safety",
      description: "Round-the-clock security monitoring for your peace of mind"
    },
    {
      icon: "fas fa-tshirt",
      title: "Laundry Service",
      description: "Professional laundry and dry cleaning services available"
    },
    {
      icon: "fas fa-laptop",
      title: "Business Center",
      description: "Dedicated workspace with printing and meeting facilities"
    },
    {
      icon: "fas fa-plane",
      title: "Travel Desk",
      description: "Complete travel assistance and tour booking services"
    },
    {
      icon: "fas fa-car",
      title: "Free Parking",
      description: "Secure parking facility for all our guests"
    },
    {
      icon: "fas fa-snowflake",
      title: "Air Conditioning",
      description: "Climate-controlled rooms for your comfort"
    },
    {
      icon: "fas fa-tv",
      title: "Entertainment",
      description: "Cable TV with premium channels in all rooms"
    },
    {
      icon: "fas fa-bath",
      title: "Premium Bathrooms",
      description: "Modern bathrooms with premium toiletries and hot water"
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Hotel Amenities</h1>
            <p className="text-xl">Everything you need for a comfortable stay</p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">Enjoy premium amenities designed for your comfort and convenience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <i className={`${amenity.icon} text-4xl text-amber-600 mb-4`}></i>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">We go the extra mile to make your stay memorable</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fas fa-calendar-check text-3xl text-amber-600 mb-4"></i>
              <h4 className="font-bold text-gray-800 mb-2">Easy Booking</h4>
              <p className="text-gray-600">Quick and hassle-free reservation process</p>
            </div>
            
            <div className="text-center">
              <i className="fas fa-clock text-3xl text-amber-600 mb-4"></i>
              <h4 className="font-bold text-gray-800 mb-2">Flexible Check-in</h4>
              <p className="text-gray-600">Early check-in and late check-out available</p>
            </div>
            
            <div className="text-center">
              <i className="fas fa-user-tie text-3xl text-amber-600 mb-4"></i>
              <h4 className="font-bold text-gray-800 mb-2">Personal Service</h4>
              <p className="text-gray-600">Dedicated staff for personalized assistance</p>
            </div>
            
            <div className="text-center">
              <i className="fas fa-map-marked-alt text-3xl text-amber-600 mb-4"></i>
              <h4 className="font-bold text-gray-800 mb-2">Local Guidance</h4>
              <p className="text-gray-600">Expert recommendations for local attractions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
