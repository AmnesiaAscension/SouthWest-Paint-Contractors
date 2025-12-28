
import React, { useState } from 'react';

const faqs = [
  {
    q: "How do I get a painting estimate?",
    a: "Simple—just call us at (713) 777-9615. We'll set up a convenient time to visit your Houston home or business, discuss your vision, and provide a clear, written estimate for free."
  },
  {
    q: "Do you handle the prep work and cleanup?",
    a: "Absolutely. We believe prep is 90% of a quality job. We handle all taping, furniture protection, sanding, and caulking. When we leave, your home will be cleaner than we found it—except with beautiful new walls!"
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Southwest Paint Contractors Inc is fully insured and bonded. We protect our workers and your property, giving you complete peace of mind throughout the project."
  },
  {
    q: "How long does a typical painting project take?",
    a: "Most residential interior projects take 1-3 days depending on size. Exterior jobs depend on Houston weather but typically wrap up within a week. We provide a projected timeline with every estimate."
  },
  {
    q: "What brands of paint do you use?",
    a: "We primarily use premium lines from Sherwin-Williams and Benjamin Moore, which are specifically formulated to withstand the heat and humidity of the Gulf Coast."
  }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-12 uppercase tracking-tight">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-blue-50/30 transition-colors"
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                <span className={`transform transition-transform ${open === idx ? 'rotate-180' : ''}`}>
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === idx && (
                <div className="p-5 bg-gray-50 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
