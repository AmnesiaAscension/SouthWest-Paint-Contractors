
import React from 'react';

interface Props { onClose: () => void; }

const BriefOverlay: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">✕</button>
        <h2 className="text-2xl font-black mb-6 border-b pb-2">WaaS Project Specs (A-G)</h2>
        
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="font-bold text-blue-600 uppercase">A) Project Summary</h3>
            <p>High-converting lead-gen for Southwest Paint Contractors Inc. Goal: Phone calls from Houston homeowners/businesses.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 uppercase">B) Site Structure</h3>
            <p>Hero > Trust > Services > Process > Area Map > FAQ > Contact.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 uppercase">C) SEO Pack</h3>
            <p>Title: Professional Painters in Houston, TX. Meta: Local city keywords, clear CTA, and business address schema readiness.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 uppercase">D) Full Page Copy</h3>
            <p>Conversion focused. No AI mentions. Focus on reliability, clean-up, and clear pricing.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 uppercase">E) FAQ Section</h3>
            <p>Covered: Estimates, Prep/Cleanup, Insurance, Timeline, and Location.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 uppercase">F) Visual/UI Notes</h3>
            <p>Sticky mobile bar (active), Scroll reveals (active), Hover-lift cards (active), High contrast accessibility.</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-600 uppercase">G) Launch Checklist</h3>
            <ul className="list-disc pl-5">
              <li>Verify phone link: (713) 777-9615</li>
              <li>Address matching GBP: 9302 Alberene Dr</li>
              <li>Mobile-first flow test (sticky bar visibility)</li>
              <li>Service area relevance (Houston/Sugar Land/Katy)</li>
            </ul>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
        >
          Return to Site
        </button>
      </div>
    </div>
  );
};

export default BriefOverlay;
