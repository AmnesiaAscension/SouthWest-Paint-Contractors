
import React from 'react';

const areas = [
  "Houston Proper", "Sugar Land", "The Heights", "Energy Corridor", 
  "Memorial", "Katy", "Pearland", "Bellaire", "River Oaks", "Cypress"
];

const ServiceAreas: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-50 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Serving All of Greater Houston</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Based in Southwest Houston, we cover the entire metro area. Whether you are in the heart of downtown or out in the suburbs, we bring the same quality and reliability to your doorstep.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
              {areas.map((area, idx) => (
                <div key={idx} className="flex items-center text-gray-700 text-sm font-semibold">
                  <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Outside these areas?</h3>
              <p className="text-sm text-gray-600 mb-6 italic">Give us a call. We often travel for specialized commercial or larger residential projects.</p>
              <a 
                href="tel:7137779615" 
                className="block w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-md active:scale-95 transition-all"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
