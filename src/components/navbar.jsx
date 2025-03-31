import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (id) => {
    setIsOpen(false); // Close menu after clicking
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 
              onClick={handleLogoClick}
              className="text-xl font-bold tracking-widest cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
              🚀 Jubilee Coders
            </h1>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:ml-6 space-x-8">
            <button onClick={() => scrollToSection('zone')} 
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
              Zone
            </button>
            <button onClick={() => scrollToSection('about-us')} 
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
              About Us
            </button>
            <button onClick={() => scrollToSection('contactus')} 
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
          <button
            onClick={() => scrollToSection('zone')}
            className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
          >
            Zone
          </button>
          <button
            onClick={() => scrollToSection('about-us')}
            className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('contactus')}
            className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
          >
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

