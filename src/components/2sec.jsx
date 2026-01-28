import React from 'react';
// Import your different images here
import img1 from '../assets/1img.png'; 
import img2 from '../assets/2img.png'; 
import img4 from '../assets/Capture.png'; 

const gardenItems = [
  { 
    title: "MINI & PETITE GARDENS", 
    desc: "Good things come in small packages.", 
    size: "SMALL / MEDIUM SUCCULENT", 
    price: "$30",
    bgImage: img1 // Assigned specific image
  },
  { 
    title: "ORIGINAL GARDENS", 
    desc: "A touch of nature to any space.", 
    size: "3 SMALL SUCCULENTS", 
    price: "$46",
    bgImage: img2
  },
  { 
    title: "DELUXE GARDENS", 
    desc: "An elegant gift of greenery.", 
    size: "3 MEDIUM SUCCULENTS", 
    price: "$62",
    bgImage: img1
  },
  { 
    title: "PREMIUM GARDENS", 
    desc: "A gorgeous green statement maker.", 
    size: "ASSORTMENT OF SUCCULENTS", 
    price: "$128",
    bgImage: img4
  },
];

const GardenCollection = () => {
  return (
    <section className="py-20 bg-white font-serif">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[32px] md:text-[40px] text-[#2d2d2d] mb-16 font-light tracking-tight">
          Garden Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-gray-200">
          {gardenItems.map((item, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden min-h-[600px] flex flex-col group
                ${i !== 3 ? 'md:border-r border-gray-200' : ''} 
                ${i !== 0 ? 'border-t md:border-t-0 border-gray-200' : ''}`}
            >
              {/* 1. Background Image - Individual per section */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${item.bgImage})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />

              {/* 2. Overlay - Subtle Darkening + Hover Blur */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 group-hover:backdrop-blur-[2px] transition-all duration-500 z-10" />

              {/* 3. Text Content */}
              <div className="relative z-20 p-8 text-center text-white flex flex-col items-center justify-between h-full py-16">
                
                <div className="w-full">
                  <h3 className="font-sans text-[11px] tracking-[0.3em] font-black mb-6 drop-shadow-lg uppercase">
                    {item.title}
                  </h3>
                  
                  <div className="h-16 flex items-center justify-center">
                    <p className="italic text-gray-50 text-[16px] leading-relaxed drop-shadow-md font-medium px-2">
                      "{item.desc}"
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col items-center">
                  <p className="text-[10px] tracking-[0.2em] text-gray-300 mb-2 uppercase font-sans font-semibold">
                    {item.size}
                  </p>
                  
                  <p className="font-bold text-white mb-8 text-[22px] drop-shadow-2xl">
                    Starting at {item.price}
                  </p>
                  
                  <button className="bg-white text-black px-12 py-3.5 text-[11px] uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-300 font-sans font-bold shadow-2xl">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GardenCollection;