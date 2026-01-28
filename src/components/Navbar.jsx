import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blackStyle = { color: "#000000" };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white border-b border-gray-100 transition-all duration-500 ${
        isScrolled ? "py-2 shadow-sm" : "py-6 md:py-8"
      }`}
    >
      {/* Top Banner (Desktop Only, Not on Scroll) */}
      {!isScrolled && (
        <div className="hidden md:block absolute top-0 w-full bg-[#c54c4c] py-2 text-white text-[9px] tracking-widest uppercase text-center font-bold">
          ♡ Love is in the air! Order your Valentine's Day gifts now! ♡
        </div>
      )}

      <div className="max-w-[1450px] mx-auto px-6 md:px-10 pt-4">
        {/* MAIN GRID */}
        <div className="grid grid-cols-3 items-center">

          {/* LEFT (Mobile Menu / Empty Desktop) */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-black"></span>
                  <span className="block w-6 h-0.5 bg-black"></span>
                  <span className="block w-6 h-0.5 bg-black"></span>
                </div>
              )}
            </button>
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <h1
              style={blackStyle}
              className={`font-serif tracking-[0.2em] transition-all duration-500 ${
                isScrolled ? "text-lg md:text-xl" : "text-2xl md:text-4xl"
              }`}
            >
              LULA'S GARDEN<span className="text-[10px] align-top">®</span>
            </h1>
          </div>

          {/* RIGHT SECTION */}
          <div
            style={blackStyle}
            className="flex justify-end items-center space-x-4 text-[10px] md:text-[11px] tracking-widest uppercase"
          >
            <a href="#" className="hidden md:inline hover:underline text-black">
              Sign In
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a href="#" className="flex items-center font-bold text-black">
              <span className="hidden sm:inline">My Cart</span>
              <span className="ml-2">🛒 (0)</span>
            </a>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav
          style={blackStyle}
          className={`hidden md:flex justify-center space-x-6 text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all duration-500 ${
            isScrolled ? "mt-3" : "mt-8"
          }`}
        >
          <a href="#" className="hover:opacity-50 text-black">Gift Boxes</a>
          <a href="#" className="hover:opacity-50 text-[#881337]">Valentine's Day Gifts</a>
          <a href="#" className="flex items-center hover:opacity-50 text-black">
            Gift Shop <span className="ml-1 text-[8px]">▼</span>
          </a>
          <a href="#" className="flex items-center hover:opacity-50 text-black">
            Corporate Gifts <span className="ml-1 text-[8px]">▼</span>
          </a>
          <a href="#" className="hover:opacity-50 text-black">Sympathy</a>
        </nav>
      </div>

      {/* MOBILE SIDE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[80%] bg-white z-[60] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-2xl text-black`}
      >
        <div className="p-8 space-y-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-black">
            ✕
          </button>
          <nav className="flex flex-col space-y-6 text-sm font-bold tracking-[0.2em] uppercase text-black">
            <a href="#" onClick={() => setIsMenuOpen(false)}>Gift Boxes</a>
            <a href="#" className="text-[#881337]">Valentine's Day</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Gift Shop</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Corporate Gifts</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Sympathy</a>
            <hr className="border-gray-300" />
            <a href="#" onClick={() => setIsMenuOpen(false)}>Sign In</a>
          </nav>
        </div>
      </div>

      {/* BACKDROP */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[55] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
