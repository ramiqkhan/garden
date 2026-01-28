import React from 'react';
import secondGardenImg from '../assets/4img.jpeg'; 

const steps = [
  {
    title: "PICK YOUR GARDEN",
    desc: "Select a garden size and succulent combination. Your succulent will arrive planted in a beautiful eco-friendly gift box.",
    // Icon layout matches the thin stroke style in the image
    icon: (
      <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 3L4 9v11a1 1 0 001 1h14a1 1 0 001-1V9l-8-6z" />
        <path d="M12 3v18M4 9h16" />
      </svg>
    )
  },
  {
    title: "MAKE IT PERSONAL",
    desc: "Choose one of our signature sleeves that fit the occasion. Whether its a birthday wishes, showing appreciation, sending love, just because or more.",
    icon: (
      <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
    )
  },
  {
    title: "SHOW YOU CARE",
    desc: "Each garden sold provides six months of safe water for one person in need.",
    icon: (
      <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-white font-serif">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-16 lg:gap-32">
        
        {/* Left Side: Image with Dark Shadow Box */}
        <div className="relative w-full md:w-1/2 pt-10">
          
          {/* Specific Solid Dark Shadow (Behind Image) */}
          <div className="absolute top-0 left-0 w-[92%] h-[92%] bg-[#53564d] z-0" />
          
          {/* Main Image Container */}
          <div className="relative z-10 translate-x-10 translate-y-10 shadow-2xl">
            <img 
              src={secondGardenImg} 
              alt="Garden Concept" 
              className="w-full h-[600px] object-cover block"
            />
          </div>
        </div>

        {/* Right Side: Step-by-Step Content */}
        <div className="w-full md:w-1/2 pt-10">
          <h2 className="text-[48px] md:text-[56px] mb-16 text-[#2d2d2d] font-light leading-tight">
            How It Works
          </h2>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-12 group items-start">
                
                {/* Icon and Connector Line Logic */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center bg-white">
                    {step.icon}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-[1px] h-28 bg-gray-200 mt-4" />
                  )}
                </div>

                {/* Text Details */}
                <div className="pt-2">
                  <h3 className="font-sans text-[12px] tracking-[0.35em] font-bold text-gray-900 mb-5 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[16px] leading-relaxed font-sans max-w-[380px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;