import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-white" : "bg-white"}`}>
      
      {/* Top Banner */}
      {!isScrolled && (
        <div className="w-full bg-[#c54c4c] py-2 text-white text-[10px] tracking-widest uppercase text-center font-bold">
          ♡ Love is in the air! Order your Valentine's Day gifts now - we'll ship later! ♡
        </div>
      )}

      {/* Main Header */}
      <div className={`max-w-[1550px] mx-auto px-6 md:px-10 transition-all duration-500 ${isScrolled ? "py-3" : "py-8"}`}>
        <div className={`flex items-center transition-all duration-500 ${isScrolled ? "justify-between" : "flex-col space-y-6"}`}>

          {/* LOGO */}
          <div className={`transition-all duration-500 ${isScrolled ? "order-1" : "order-1 text-center"}`}>
            <h1 className={`font-serif tracking-[0.2em] text-[#2d2d2d] transition-all duration-500 ${isScrolled ? "text-xl" : "text-3xl md:text-4xl"}`}>
              LULA'S GARDEN<span className="text-[10px] align-top">®</span>
            </h1>
          </div>

          {/* NAVIGATION */}
          <nav className={`hidden md:flex items-center space-x-6 lg:space-x-8 text-[11px] font-bold uppercase tracking-widest transition-all duration-500 
            ${isScrolled ? "order-2 ml-auto pr-8" : "order-2 justify-center"}`}>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400">Gift Boxes</a>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400">Valentine's Day Gifts</a>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400 flex items-center">
              Gift Shop <span className="ml-1 text-[8px]">▼</span>
            </a>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400 flex items-center">
              Corporate Gifts <span className="ml-1 text-[8px]">▼</span>
            </a>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400">Sympathy</a>
          </nav>

          {/* RIGHT UTILITIES */}
          <div className={`flex items-center space-x-4 text-[11px] uppercase tracking-widest font-medium transition-all duration-500 
            ${isScrolled ? "order-3" : "md:absolute md:right-10 md:top-[50px]"}`}>
            <a href="#" className="hidden lg:inline hover:underline text-[#2d2d2d]">Sign In</a>
            <span className="hidden lg:inline text-gray-300">|</span>
            <a href="#" className="flex items-center font-bold text-[#2d2d2d]">
              <span className="ml-2">🛒 (0)</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className={`md:hidden order-1 ${isScrolled ? "" : "absolute left-6 top-10"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 transition-all duration-500">
          <nav className="flex flex-col space-y-2 p-4 text-[12px] font-bold uppercase">
            <a href="#" className="text-[#a33b3b] hover:text-gray-400">Gift Boxes</a>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400">Valentine's Day Gifts</a>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400">Gift Shop</a>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400">Corporate Gifts</a>
            <a href="#" className="text-[#a33b3b] hover:text-gray-400">Sympathy</a>
            <button
              className="mt-2 px-4 py-2 bg-[#a33b3b] text-white font-bold uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Close Menu
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
