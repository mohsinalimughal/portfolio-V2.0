import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import mohsinImage from './mohsinlogo.png'; 
import mohsinImage2 from './mohsinlogo2.png'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
         
  <img
    src={mohsinImage}
    alt="Mohsin Logo Light"
    className="w-[7vw] block dark:hidden"
  />

  <img
    src={mohsinImage2}
    alt="Mohsin Logo Dark"
    className="w-[7vw] hidden dark:block"
  />
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Home size={18} />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <User size={18} />
                <span>About</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Briefcase size={18} />
                <span>Experience</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Briefcase size={18} />
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </li>
          </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg p-4">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors w-full text-left"
                >
                  <Home size={18} />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors w-full text-left"
                >
                  <User size={18} />
                  <span>About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors w-full text-left"
                >
                  <Briefcase size={18} />
                  <span>Experience</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors w-full text-left"
                >
                  <Briefcase size={18} />
                  <span>Projects</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors w-full text-left"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;