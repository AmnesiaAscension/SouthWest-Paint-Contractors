
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 pb-32 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-12">
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Southwest Paint Contractors Inc</h4>
            <p className="text-sm leading-relaxed mb-6">
              Houston's trusted choice for residential and commercial painting since our inception. We pride ourselves on workmanship that stands the test of time.
            </p>
            <div className="flex space-x-4">
              <span className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">FB</span>
              <span className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">IG</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">📍</span>
                <span>9302 Alberene Dr, Houston, TX 77074</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3">📞</span>
                <a href="tel:7137779615" className="hover:text-white transition-colors">(713) 777-9615</a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3">⏰</span>
                <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Promise</h4>
            <p className="text-sm italic leading-relaxed">
              "We don't just paint walls; we protect your investment. If you aren't happy with the final result, we'll keep working until you are."
            </p>
            <div className="mt-6 flex items-center bg-blue-600/10 p-4 rounded-lg border border-blue-600/20">
              <div className="text-2xl mr-3">⭐</div>
              <div>
                <p className="text-white font-bold text-sm">4.4 Star Google Rating</p>
                <p className="text-xs">Based on 16+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Southwest Paint Contractors Inc. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
