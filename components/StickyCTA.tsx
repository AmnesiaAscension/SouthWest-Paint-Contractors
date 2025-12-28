
import React from 'react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex space-x-3">
        <a 
          href="tel:7137779615" 
          className="flex-1 bg-blue-600 text-white flex items-center justify-center py-4 rounded-xl font-black text-lg shadow-lg active:scale-95 transition-transform"
        >
          <svg className="h-6 w-6 mr-2 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          CALL NOW
        </a>
      </div>
      <p className="text-[10px] text-center text-gray-400 mt-2 uppercase font-bold tracking-widest">Free On-Site Painting Estimate</p>
    </div>
  );
};

export default StickyCTA;
