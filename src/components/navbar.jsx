import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='h-[72px] bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white w-full px-6 lg:px-20 shadow-lg relative'>
      <div className="h-full w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center">
        <div className="h-full flex items-center">
          <h1 className="text-xl font-bold tracking-widest">🚀 Jubilee Coders</h1>
        </div>
        <button className="lg:hidden absolute right-6 top-6" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div 
          className={`flex flex-col lg:flex-row items-center justify-center gap-6 mt-4 lg:mt-0 ${isOpen ? 'block' : 'hidden'} lg:flex`}
        >
          <button onClick={() => scrollToSection('zone')} className="hover:text-gray-400 transition-all duration-300">Zone</button>
          <button onClick={() => scrollToSection('about-us')} className="hover:text-gray-400 transition-all duration-300">About Us</button>
          <button onClick={() => scrollToSection('contactus')} className="hover:text-gray-400 transition-all duration-300">Contact us</button>
          {/* <Link to="/about" className="hover:text-gray-400 transition-all duration-300">About Us</Link> */}
          {/* <Link to="/contact" className="hover:text-gray-400 transition-all duration-300">Contact Us</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
