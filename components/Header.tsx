
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-blue-900 font-extrabold text-xl md:text-2xl tracking-tight leading-tight uppercase">
              Southwest <span className="text-blue-600 font-light">Paint</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Our Process</a>
            <a href="#faq" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
            <a 
              href="tel:7137779615" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              (713) 777-9615
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <a 
              href="tel:7137779615" 
              className="text-blue-600 font-bold border-2 border-blue-600 px-3 py-1 rounded-md text-sm"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
