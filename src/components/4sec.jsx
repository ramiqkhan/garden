import React from 'react';
import lunarImg from '../assets/lunar.webp'; 
import heartImg from '../assets/9img.webp'; 

const NewArrivals = () => {
  return (
    <section className="py-24 bg-white font-serif overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-center text-[42px] mb-24 text-[#2d2d2d] font-light">
          New Arrivals
        </h2>

        {/* First Block: Image pops out to the right */}
        <div className="relative flex flex-col md:flex-row items-center mb-44 group">
          {/* Dark Text Box */}
          <div className="w-full md:w-[65%] bg-[#53564d] p-12 md:p-20 text-white z-0 relative">
            <span className="font-sans text-[10px] tracking-[0.2em] mb-4 block opacity-80 uppercase">
              LULA'S GARDEN NEWS
            </span>
            <h3 className="text-[32px] md:text-[38px] mb-6 font-light leading-tight">
              Lunar New Year Gifts
            </h3>
            <p className="text-[14px] leading-relaxed opacity-90 max-w-sm mb-10 font-sans">
              Celebrate the Lunar New Year with a curated collection of meaningful 
              gifts designed to welcome good fortune, prosperity, and new beginnings.
            </p>
            <button className="bg-white text-black px-10 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              SHOP NOW
            </button>
          </div>
          
          {/* Overlapping Image - Fixed with Translate */}
          <div className="w-full md:w-[50%] z-10 md:absolute md:right-0 md:translate-x-12 translate-y-8 md:translate-y-0 shadow-2xl">
            <img 
              src={lunarImg} 
              alt="Lunar" 
              className="w-full h-[450px] object-cover border-[15px] border-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Second Block: Image pops out to the left */}
     <div className="relative flex flex-col md:flex-row-reverse items-start md:items-stretch group">

  {/* Dark Text Box */}
  <div className="w-full md:w-[65%] bg-[#53564d] p-8 md:p-20 text-white z-10 relative">
    <span className="font-sans text-[10px] tracking-[0.2em] mb-4 block opacity-80 uppercase">
      LULA'S GARDEN NEWS
    </span>
    <h3 className="text-[28px] md:text-[38px] mb-6 font-light leading-tight">
      Heart Gardens
    </h3>
    <p className="text-[14px] leading-relaxed opacity-90 max-w-md mb-10 font-sans">
      Our Heart Gardens are a thoughtful way to share a little love. 
      Available in two sizes, each heart-shaped gift box is filled with 
      a curated assortment of living succulents.
    </p>
    <button className="bg-white text-black px-10 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
      SHOP NOW
    </button>
  </div>
  
  {/* Overlapping Image */}
  <div className="w-full md:w-[50%] z-0 md:relative md:-ml-12 flex justify-center md:justify-start mt-6 md:mt-0">
    <img 
      src={heartImg} 
      alt="Heart" 
      className="w-full md:w-auto md:h-[450px] object-cover border-[15px] border-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
    />
  </div>
</div>


      </div>
    </section>
  );
};

export default NewArrivals;