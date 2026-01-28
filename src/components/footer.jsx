import React from "react";

const Footer = () => {
  return (
 <footer className="w-full bg-white border-t border-gray-100">

      
      {/* OUTER WRAPPER (full width) */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-20">
        
        {/* INNER CONTAINER (centered content) */}
        <div className="max-w-[1600px] mx-auto">

          {/* MAIN FOOTER GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-12 mb-20">

            {/* Customer Care */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                Customer Care
              </h4>
              <ul className="space-y-4">
                {[
                  "Contact Us",
                  "Affiliate Program",
                  "My Account",
                  "Blog",
                  "Care Guide",
                  "Accessibility",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[11px] uppercase tracking-[0.15em] text-gray-600 hover:text-black transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                About Us
              </h4>
              <ul className="space-y-4">
                {[
                  "Our Story",
                  "FAQ",
                  "Privacy Policy",
                  "Terms of Service",
                  "Do Not Sell or Share My Personal Information",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[11px] uppercase tracking-[0.15em] text-gray-600 hover:text-black transition leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                Shop
              </h4>
              <ul className="space-y-4">
                <li>
                  <a className="footer-link" href="#">
                    Corporate Gifts
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                Follow Us
              </h4>
              <ul className="space-y-4">
                {["Instagram", "Facebook", "Pinterest", "LinkedIn"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[11px] uppercase tracking-[0.15em] text-gray-600 hover:text-black transition"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:pl-8">
              <h4 className="text-2xl font-serif italic mb-4">
                Let’s Grow Together!
              </h4>
              <p className="text-[12px] text-gray-600 mb-6 max-w-xs">
                Sign up for our newsletter for updates.
              </p>

              <div className="flex border border-black max-w-sm">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 text-sm italic focus:outline-none"
                />
                <button className="px-6 bg-black text-white hover:bg-gray-800 transition">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              © 2026 Lula's Garden, Inc.
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
