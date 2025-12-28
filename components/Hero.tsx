
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left md:flex md:items-center">
          <div className="md:w-3/5 lg:w-1/2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Top Rated Houston Painters</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              Expert Home Painting <br className="hidden lg:block"/> 
              <span className="text-blue-600">Right Here in Houston</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Serving Houston, TX and surrounding neighborhoods. We specialize in interior and exterior painting that lasts. Tired of unreliable contractors? Experience the Southwest Paint difference.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="tel:7137779615" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200/50"
              >
                Get My Free Estimate
              </a>
              <div className="flex items-center justify-center space-x-3 text-gray-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i} 
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
                      src={`https://picsum.photos/seed/${i+10}/100/100`} 
                      alt="Local Customer" 
                    />
                  ))}
                </div>
                <p className="text-sm font-medium">Join 500+ Houston Homeowners</p>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-2/5 lg:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/houston-paint/800/600" 
                  alt="Professional Houston Painting Job" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-50 flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight italic">"Cleaned up every day. The best finish we've ever had on our Houston home."</p>
                    <p className="text-xs text-gray-500 mt-1">— Mark R., Sugar Land</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
