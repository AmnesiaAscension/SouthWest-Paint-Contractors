
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Free Estimate',
    text: 'Call us at (713) 777-9615. We visit your site, measure, and provide a transparent quote with no hidden fees.'
  },
  {
    num: '02',
    title: 'Surface Prep',
    text: 'We protect your floors and furniture. Then we repair cracks, sand surfaces, and ensure everything is ready for paint.'
  },
  {
    num: '03',
    title: 'Precision Painting',
    text: 'Using high-quality paints, our experienced crew applies even coats for a professional, streak-free finish.'
  },
  {
    num: '04',
    title: 'Clean & Walkthrough',
    text: 'We clean up every speck of dust. Finally, we walk through the project with you to ensure you are 100% satisfied.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight">The Southwest Way</h2>
          <p className="text-blue-200 text-lg">Stress-free painting from start to finish.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-6xl font-black text-blue-800 absolute -top-10 -left-4 opacity-50 group-hover:text-blue-600 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
