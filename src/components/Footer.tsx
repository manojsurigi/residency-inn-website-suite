
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-yellow-400 text-xl font-bold mb-4">
              <i className="fas fa-rose mr-2"></i>The Rose Residency Inn
            </h5>
            <p className="text-gray-300 mb-4">Experience affordable luxury in the heart of Hyderabad. Your comfort is our priority.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-yellow-400 font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-yellow-400 transition-colors">Rooms</Link></li>
              <li><Link to="/amenities" className="text-gray-300 hover:text-yellow-400 transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-yellow-400 font-bold mb-4">Contact Info</h5>
            <ul className="space-y-2 text-gray-300">
              <li><i className="fas fa-map-marker-alt mr-2"></i>A/1, Plot No 44, Main Road, MLA Colony, Banjara Hills, Hyderabad 500034</li>
              <li><i className="fas fa-phone mr-2"></i>+91 9346017770</li>
              <li><i className="fas fa-envelope mr-2"></i>reservations.residencyinn@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-yellow-400 font-bold mb-4">Location</h5>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.582168729942!2d78.4089!3d17.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9734c0b5b8e5%3A0x7f5b9c2a8f9c3e2!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin" 
                width="100%" 
                height="150" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024 The Rose Residency Inn. All rights reserved.</p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Designed and Developed by <a href="https://www.sritechnologies.in" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">www.sritechnologies.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
