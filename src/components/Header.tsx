import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo1.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About Us', href: '/aboutus' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Team', href: '/team' },
    { name: 'Employers', href: '/employers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-[#0D4D66] dark:bg-white fixed w-full z-50 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white dark:text-[#0D4D66] font-bold text-xl">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          </Link>
          <span>Bhagyavathi</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-white dark:text-[#0D4D66] text-sm px-4 py-1.5 rounded-full font-medium ${
                location.pathname === link.href
                  ? 'bg-[#9FBFC5] text-[#0D4D66]'
                  : 'hover:bg-[#9FBFC5]/80 hover:text-[#0D4D66]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/916303130025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md bg-white text-[#0D4D66] dark:bg-[#0D4D66] dark:text-white transition-colors duration-300 shadow-md hover:scale-105"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D4D66] dark:bg-white px-6 pt-4 pb-6 space-y-3 transition-colors duration-300 border-t border-white dark:border-[#ccc]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-white dark:text-[#0D4D66] text-sm px-4 py-2 rounded-full font-medium ${
                location.pathname === link.href
                  ? 'bg-[#9FBFC5] text-[#0D4D66]'
                  : 'hover:bg-[#9FBFC5]/80 hover:text-[#0D4D66]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/916303130025"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white text-sm px-4 py-2 rounded-full font-medium text-center hover:bg-green-600"
          >
            <div className="flex items-center justify-center gap-2">
              <FaWhatsapp /> WhatsApp
            </div>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
