import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface PersonalInfo {
  name: string;
  email: string;
  resume: string;
  social: {
    github: string;
    linkedin: string;
  };
}

interface PortfolioData {
  personalInfo: PersonalInfo;
}

interface HeaderProps {
  portfolioData?: PortfolioData;
}

const Header: React.FC<HeaderProps> = ({ portfolioData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentPersonalInfo = portfolioData?.personalInfo || personalInfo;

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

  const firstName = currentPersonalInfo.name.split(' ')[0];
  const lastName = currentPersonalInfo.name.split(' ').slice(1).join(' ');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-blue-400">{firstName} </span>{lastName}
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={currentPersonalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={currentPersonalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${currentPersonalInfo.email}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/pratikkachhadiya05/Pratik.github.io/blob/main/public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-slate-800/95 backdrop-blur-md rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <a
                  href={currentPersonalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={currentPersonalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${currentPersonalInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <FileText size={14} />
                  <span>Resume</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;