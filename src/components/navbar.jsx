import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  const renderNavItems = () => {
    if (location.pathname === '/') {
      return (
        <>
          <button onClick={() => scrollToSection('zone')} 
            className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium"
          >
            Zone
          </button>
          <button onClick={() => scrollToSection('about-us')} 
            className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium"
          >
            About Us
          </button>
          <button onClick={() => scrollToSection('contactus')} 
            className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium"
          >
            Contact us
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/" className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium">
            Home
          </Link>
          <Link to="/movies" className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium">
            Movies
          </Link>
          <Link to="/memes" className="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium">
            Memes
          </Link>
        </>
      );
    }
  };

  return (
    <nav className="h-14 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 
              onClick={handleLogoClick}
              className="text-lg font-bold tracking-wide cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
              🚀 Jubilee Coders
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center space-x-6">
            {renderNavItems()}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden absolute w-full bg-gray-900 shadow-lg z-40`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {location.pathname === '/' ? (
            <>
              <button
                onClick={() => scrollToSection('zone')}
                className="w-full text-left text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Zone
              </button>
              <button
                onClick={() => scrollToSection('about-us')}
                className="w-full text-left text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contactus')}
                className="w-full text-left text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Contact us
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/movies" className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Movies
              </Link>
              <Link to="/memes" className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Memes
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
