
import React from 'react';

const TrustSignals: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-900 mb-1">4.4 / 5</span>
            <div className="flex text-yellow-400 mb-2">
              {[1,2,3,4].map(i => <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              <svg className="h-5 w-5 text-gray-300 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Google Rating</p>
          </div>
          <div className="flex flex-col items-center border-l border-gray-200">
            <span className="text-3xl font-bold text-blue-900 mb-1">100%</span>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Satisfaction</p>
          </div>
          <div className="flex flex-col items-center border-l border-gray-200">
            <span className="text-3xl font-bold text-blue-900 mb-1">Free</span>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">On-Site Estimates</p>
          </div>
          <div className="flex flex-col items-center border-l border-gray-200">
            <span className="text-3xl font-bold text-blue-900 mb-1">Fully</span>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2">Insured & Bonded</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
