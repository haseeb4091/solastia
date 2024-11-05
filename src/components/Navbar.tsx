import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Solastia</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Contact Us</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-indigo-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;