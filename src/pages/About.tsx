
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-800/80 to-blue-900/80 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About The Rose Residency Inn</h1>
            <p className="text-xl">Affordable luxury with a personal touch</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Welcome to The Rose Residency Inn, where comfort meets elegance in the heart of Hyderabad's prestigious Banjara Hills. Since our establishment, we have been committed to providing exceptional hospitality that combines modern amenities with warm, personalized service.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our philosophy is simple: to offer affordable luxury without compromising on quality. Every guest is treated like family, and every stay is crafted to create lasting memories.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-gray-600">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">5★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Hotel Exterior" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Hotel Interior" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What makes us different</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <i className="fas fa-heart text-4xl text-amber-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hospitality</h3>
              <p className="text-gray-600">We believe in treating every guest with warmth and genuine care, making them feel at home.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <i className="fas fa-gem text-4xl text-amber-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600">We maintain the highest standards in all our services and amenities.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <i className="fas fa-handshake text-4xl text-amber-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Trust</h3>
              <p className="text-gray-600">Building lasting relationships through reliability and transparency.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
