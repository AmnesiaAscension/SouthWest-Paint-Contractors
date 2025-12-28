
import React from 'react';

const services = [
  {
    title: 'Interior Painting',
    description: 'Transform your living spaces with premium finishes. We handle everything from trim to vaulted ceilings with zero mess.',
    icon: '🏠'
  },
  {
    title: 'Exterior Painting',
    description: 'Protect your Houston home from the Texas sun and humidity. High-durability coatings that stay vibrant for years.',
    icon: '🌳'
  },
  {
    title: 'Residential Projects',
    description: 'Custom solutions for homeowners. Whether it is a single room or a full house repaint, we respect your space.',
    icon: '👨‍👩‍👧'
  },
  {
    title: 'Commercial Painting',
    description: 'Reliable painting for offices, storefronts, and warehouses. We work around your schedule to minimize downtime.',
    icon: '🏢'
  },
  {
    title: 'Drywall & Repair',
    description: 'Smooth surfaces are the key to a great paint job. We patch, sand, and texture walls to perfection.',
    icon: '🛠️'
  },
  {
    title: 'Surface Prep',
    description: 'The most important step. We scrape, caulk, and prime every inch before the first drop of paint touches the surface.',
    icon: '🧹'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 uppercase tracking-tight">Our Painting Services</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Professional painting is about more than just color. It is about protection, value, and pride in your property.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="tel:7137779615" 
            className="inline-flex items-center text-blue-600 font-bold text-lg hover:underline"
          >
            Don't see what you need? Call us for a custom quote &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
