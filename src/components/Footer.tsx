import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
}

interface PortfolioData {
  personalInfo: PersonalInfo;
  // Add other fields as needed
}

interface FooterProps {
  portfolioData?: PortfolioData;
}

const Footer: React.FC<FooterProps> = ({ portfolioData }) => {
  const currentPersonalInfo = portfolioData?.personalInfo || personalInfo;
  const firstName = currentPersonalInfo.name.split(' ')[0];
  const lastName = currentPersonalInfo.name.split(' ').slice(1).join(' ');

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-blue-400">{firstName} </span>{lastName}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Full Stack Developer passionate about creating innovative solutions 
                and building exceptional user experiences with modern web technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Education
                </button>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>{currentPersonalInfo.email}</p>
                <p>{currentPersonalInfo.phone}</p>
                <p>{currentPersonalInfo.location}</p>
                
                <div className="flex space-x-4 mt-4">
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
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} {currentPersonalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart size={16} className="text-red-500 mx-1" /> and lots of chai ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;