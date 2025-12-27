import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-br from-indigo-500 to-purple-500 py-5 sm:py-2 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 xl:px-12 2xl:max-w-[1400px] 2xl:px-12 md:px-6 sm:px-4 flex justify-between items-center">
        {/* Brand */}
        <div className="mb-0 md:mb-0">
          <Link 
            to="/" 
            className="flex flex-col items-start text-white text-base sm:text-lg md:text-xl lg:text-[1.55rem] xl:text-2xl 2xl:text-2xl font-extrabold no-underline transition-all duration-300 tracking-tight drop-shadow-sm hover:scale-105 hover:drop-shadow-md"
            onClick={closeMobileMenu}
          >
            <span className="text-[1.2em] sm:text-[1.15em] md:text-[1.18em] lg:text-[1.2em] font-medium text-white leading-tight">
              SoftLend
            </span>
            <span className="text-[0.65em] sm:text-[0.7em] md:text-[0.75em] lg:text-[0.85em] text-[#d3e4ff] leading-tight font-normal tracking-wide mt-[0.08em]">
              Where Borrower Meets Lender.
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none m-0 p-0 gap-2">
          <li className="m-0">
            <Link 
              to="/" 
              className={`text-white/95 no-underline text-base lg:text-[0.95rem] xl:text-[1.0625rem] 2xl:text-[1.0625rem] font-medium py-2.5 px-5 lg:py-2 lg:px-4 xl:py-3 xl:px-6 rounded-lg transition-all duration-300 relative group
                ${isActive('/') 
                  ? 'bg-white/25 text-white font-semibold shadow-md' 
                  : 'hover:bg-white/15 hover:text-white hover:-translate-y-0.5'
                }`}
            >
              Loans
              <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                isActive('/') ? 'w-[calc(100%-2.5rem)]' : 'w-0 group-hover:w-[calc(100%-2.5rem)]'
              }`}></span>
            </Link>
          </li>
          <li className="m-0">
            <Link 
              to="/emi-calculator" 
              className={`text-white/95 no-underline text-base lg:text-[0.95rem] xl:text-[1.0625rem] 2xl:text-[1.0625rem] font-medium py-2.5 px-5 lg:py-2 lg:px-4 xl:py-3 xl:px-6 rounded-lg transition-all duration-300 relative group
                ${isActive('/emi-calculator') 
                  ? 'bg-white/25 text-white font-semibold shadow-md' 
                  : 'hover:bg-white/15 hover:text-white hover:-translate-y-0.5'
                }`}
            >
              EMI Calculator
              <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                isActive('/emi-calculator') ? 'w-[calc(100%-2.5rem)]' : 'w-0 group-hover:w-[calc(100%-2.5rem)]'
              }`}></span>
            </Link>
          </li>
          <li className="m-0">
            <Link 
              to="/apply" 
              className={`text-white/95 no-underline text-base lg:text-[0.95rem] xl:text-[1.0625rem] 2xl:text-[1.0625rem] font-medium py-2.5 px-5 lg:py-2 lg:px-4 xl:py-3 xl:px-6 rounded-lg transition-all duration-300 relative group
                ${isActive('/apply') 
                  ? 'bg-white/25 text-white font-semibold shadow-md' 
                  : 'hover:bg-white/15 hover:text-white hover:-translate-y-0.5'
                }`}
            >
              Apply
              <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                isActive('/apply') ? 'w-[calc(100%-2.5rem)]' : 'w-0 group-hover:w-[calc(100%-2.5rem)]'
              }`}></span>
            </Link>
          </li>
          <li className="m-0">
            <Link 
              to="/contact" 
              className={`text-white/95 no-underline text-base lg:text-[0.95rem] xl:text-[1.0625rem] 2xl:text-[1.0625rem] font-medium py-2.5 px-5 lg:py-2 lg:px-4 xl:py-3 xl:px-6 rounded-lg transition-all duration-300 relative group
                ${isActive('/contact') 
                  ? 'bg-white/25 text-white font-semibold shadow-md' 
                  : 'hover:bg-white/15 hover:text-white hover:-translate-y-0.5'
                }`}
            >
              Contact
              <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                isActive('/contact') ? 'w-[calc(100%-2.5rem)]' : 'w-0 group-hover:w-[calc(100%-2.5rem)]'
              }`}></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg transition-all"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col list-none m-0 p-4 gap-2">
          <li>
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block text-white/95 no-underline text-sm font-medium py-2.5 px-4 sm:py-2.5 sm:px-3.5 sm:text-xs rounded-lg transition-all duration-300 text-center
                ${isActive('/') 
                  ? 'bg-white/25 text-white font-semibold shadow-md' 
                  : 'hover:bg-white/15 hover:text-white'
                }`}
            >
              Loans
            </Link>
          </li>
          <li>
            <Link
              to="/emi-calculator"
              onClick={closeMobileMenu}
              className={`block text-white/95 no-underline text-sm font-medium py-2.5 px-4 sm:py-2.5 sm:px-3.5 sm:text-xs rounded-lg transition-all duration-300 text-center
                ${isActive('/emi-calculator') 
                  ? 'bg-white/25 text-white font-semibold shadow-md' 
                  : 'hover:bg-white/15 hover:text-white'
                }`}
            >
              EMI Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/apply"
              onClick={closeMobileMenu}
              className={`block text-white/95 no-underline text-sm font-medium py-2.5 px-4 sm:py-2.5 sm:px-3.5 sm:text-xs rounded-lg transition-all duration-300 text-center
                ${isActive('/apply') 
                  ? 'bg-white/25 text-white font-semibold shadow-md' 
                  : 'hover:bg-white/15 hover:text-white'
                }`}
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block text-white/95 no-underline text-sm font-medium py-2.5 px-4 sm:py-2.5 sm:px-3.5 sm:text-xs rounded-lg transition-all duration-300 text-center
                ${isActive('/contact') 
                  ? 'bg-white/25 text-white font-semibold shadow-md' 
                  : 'hover:bg-white/15 hover:text-white'
                }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

