import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Themes', href: '#themes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Partners', href: '#partners' },
    { name: 'Prize', href: '#prize' },
    { name: 'FAQs', href: '#faqs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-yellow-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Code className="h-10 w-10 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Idea<span className="text-yellow-400">Cube</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-4 py-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <button className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 text-gray-300 hover:text-yellow-400 transition-colors duration-300 focus:outline-none"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Menu className={`h-6 w-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-l border-yellow-500/20 shadow-2xl transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between mb-8 pt-4">
              <div className="flex items-center space-x-3">
                <Code className="h-8 w-8 text-yellow-400" />
                <span className="text-xl font-bold text-white">Idea³</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-4 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-yellow-400/20 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{item.name}</span>
                  </div>
                </button>
              ))}
            </nav>

            {/* Mobile Register Button */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register Now
              </button>
            </div>

            {/* Sidebar Footer */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-sm text-center">
                July 19, 2025 • Pune, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}