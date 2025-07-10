import React from 'react';
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface PortfolioData {
  personalInfo: {
    avatar: string;
    name: string;
    title: string;
    bio: string;
    location: string;
    phone: string;
    email: string;
  };
  // Add other fields as needed
}

interface HeroProps {
  portfolioData?: PortfolioData;
}

const Hero: React.FC<HeroProps> = ({ portfolioData }) => {
  const currentPersonalInfo = portfolioData?.personalInfo || personalInfo;

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden pt-24 md:pt-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzRoLTJjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDR2NGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <img
              src={currentPersonalInfo.avatar}
              alt={currentPersonalInfo.name}
              className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-blue-400">{currentPersonalInfo.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            {currentPersonalInfo.title}
          </p>

          {/* Bio */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {currentPersonalInfo.bio}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-blue-400" />
              <span>{currentPersonalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-blue-400" />
              <span>{currentPersonalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-blue-400" />
              <span>{currentPersonalInfo.email}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
            {/* <a
              href="{`${import.meta.env.BASE_URL}resume.pdf`}"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Download Resume
            </a> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-400 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;