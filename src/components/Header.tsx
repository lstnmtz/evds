import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'À propos', path: '/a-propos' },
    { name: 'Blog/Actualités', path: '/blog' },
    { name: 'Témoignages', path: '/temoignages' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Navigation gauche - desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-[#EC781D] ${
                  isActive(item.path) ? 'text-[#EC781D]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo central */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#EC781D]">En Vie de Sophro</h1>
              <p className="text-sm text-gray-600">Bénédicte Lachapelle</p>
            </div>
          </Link>

          {/* Navigation droite - desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-[#EC781D] ${
                  isActive(item.path) ? 'text-[#EC781D]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Menu burger - mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 font-medium transition-colors duration-200 hover:text-[#EC781D] ${
                  isActive(item.path) ? 'text-[#EC781D]' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;