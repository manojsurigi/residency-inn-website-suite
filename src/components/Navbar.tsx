
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between text-sm">
            <div>
              <i className="fas fa-phone mr-2"></i>+91 9346017770
            </div>
            <div>
              <i className="fas fa-envelope mr-2"></i>reservations.residencyinn@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-amber-800">
              <i className="fas fa-rose mr-2"></i>The Rose Residency Inn
            </Link>
            
            <button 
              className="lg:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none`}>
              <ul className="flex flex-col lg:flex-row lg:space-x-8 p-4 lg:p-0">
                <li><Link to="/" className="block py-2 lg:py-0 hover:text-yellow-600 transition-colors">Home</Link></li>
                <li><Link to="/about" className="block py-2 lg:py-0 hover:text-yellow-600 transition-colors">About</Link></li>
                <li><Link to="/rooms" className="block py-2 lg:py-0 hover:text-yellow-600 transition-colors">Rooms</Link></li>
                <li><Link to="/amenities" className="block py-2 lg:py-0 hover:text-yellow-600 transition-colors">Amenities</Link></li>
                <li><Link to="/gallery" className="block py-2 lg:py-0 hover:text-yellow-600 transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="block py-2 lg:py-0 hover:text-yellow-600 transition-colors">Contact</Link></li>
                <li><Link to="/other-hotels" className="block py-2 lg:py-0 hover:text-yellow-600 transition-colors">Other Hotels</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
