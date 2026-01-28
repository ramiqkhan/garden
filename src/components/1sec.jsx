import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../assets/1img.PNG';
import img1 from '../assets/2img.PNG';

const slides = [
  {
    id: 1,
    subtitle: "SHOP NEW",
    title: "VALENTINE'S DAY",
    buttonText: "SHOP COLLECTION",
    btnColor: "bg-[#e44652]",
    textColor: "text-[#e44652]",
    bgColor: "bg-[#fdf3f4]",
    layout: "valentines",
    images: [
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500"
    ]
  },
  {
    id: 2,
    subtitle: "succulent delivery",
    title: "Happiness Grows Here",
    buttonText: "shop collection",
    btnColor: "bg-[#8b9467]",
    textColor: "text-[#2d2d2d]",
    bgColor: "bg-[#fcfbf7]",
    layout: "succulent",
    images: [img, img1]
  },
  {
    id: 3,
    subtitle: "easy gifting",
    title: "CORPORATE GIFTING",
    description: "Exploring ways to make your gift impactful? Contact us for custom gifting options",
    buttonText: "contact us today",
    btnColor: "bg-[#a3a88c]",
    textColor: "text-[#1a1a1a]",
    bgColor: "bg-[#f8f6f1]",
    layout: "corporate",
    images: ["https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"]
  }
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative w-full h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden transition-colors duration-1000 ${slides[index].bgColor}`}>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:ital,wght@0,400;1,700&display=swap');
      </style>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-6 h-full flex items-center relative flex-col md:flex-row"
        >
          {/* --- VALENTINE LAYOUT --- */}
          {slides[index].layout === "valentines" && (
            <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-8 h-full">

              {/* Left Image */}
              <motion.div 
                initial={{ x: -100, rotate: -15 }} 
                animate={{ x: 0, rotate: -5 }} 
                className="w-full md:w-1/4 p-2 bg-white shadow-xl"
              >
                <img src={slides[index].images[0]} alt="Valentine" className="w-full h-48 md:h-64 object-cover" />
              </motion.div>

              {/* Center Text */}
              <div className="flex-1 flex flex-col items-center text-center px-4 md:px-0">
                <p className="uppercase tracking-[0.4em] text-gray-500 text-xs mb-2 md:mb-4 font-bold">{slides[index].subtitle}</p>
                <h1 className={`text-4xl md:text-6xl mb-4 md:mb-8 font-bold ${slides[index].textColor}`} style={{ fontFamily: "'Dancing Script', cursive" }}>
                  {slides[index].title}
                </h1>
                <button className={`${slides[index].btnColor} text-white px-8 md:px-10 py-2 md:py-3 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all`}>
                  {slides[index].buttonText}
                </button>
              </div>

              {/* Right Image */}
              <motion.div 
                initial={{ x: 100, rotate: 15 }} 
                animate={{ x: 0, rotate: 8 }} 
                className="w-full md:w-1/4 p-2 bg-white shadow-xl mt-4 md:mt-0"
              >
                <img src={slides[index].images[1]} alt="Valentine" className="w-full h-48 md:h-64 object-cover" />
              </motion.div>

            </div>
          )}

          {/* --- SUCCULENT LAYOUT --- */}
          {slides[index].layout === "succulent" && (
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 h-full">

              {/* Left Image */}
              <div className="w-full md:w-1/3 h-48 md:h-full">
                <img src={slides[index].images[0]} alt="succulent" className="w-full h-full object-cover rounded-md" />
              </div>

              {/* Center Text */}
              <div className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-0">
                <p className="italic font-serif text-gray-400 mb-2 md:mb-4 text-lg">{slides[index].subtitle}</p>
                <h1 className="text-3xl md:text-5xl font-serif leading-tight mb-4 md:mb-8 text-[#2d2d2d]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {slides[index].title}
                </h1>
                <button className={`${slides[index].btnColor} text-white px-6 md:px-8 py-2 md:py-2 text-sm lowercase font-light hover:bg-opacity-80 transition-all`}>
                  {slides[index].buttonText}
                </button>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-1/3 h-48 md:h-full mt-4 md:mt-0">
                <img src={slides[index].images[1]} alt="succulent" className="w-full h-full object-cover rounded-md" />
              </div>

            </div>
          )}

          {/* --- CORPORATE LAYOUT --- */}
          {slides[index].layout === "corporate" && (
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 h-full">

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0 mt-4 md:mt-0">
                <p className="italic font-serif text-gray-500 mb-2">{slides[index].subtitle}</p>
                <h1 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {slides[index].title}
                </h1>
                <p className="text-gray-500 mb-4 md:mb-8 text-sm md:text-base leading-relaxed">{slides[index].description}</p>
                <button className="border-b-2 border-gray-300 text-gray-700 uppercase tracking-widest text-xs pb-1 font-bold hover:border-black transition-all">
                  {slides[index].buttonText}
                </button>
              </div>

              {/* Image */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0"
              >
                <div className="w-64 md:w-80 h-64 md:h-80 bg-white p-4 shadow-2xl rotate-3">
                  <img src={slides[index].images[0]} alt="Corporate" className="w-full h-full object-cover" />
                </div>
              </motion.div>

            </div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-10 flex gap-3 z-20 justify-center w-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full border border-gray-400 transition-all duration-300 ${index === i ? "bg-gray-700 scale-125" : "bg-transparent"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
