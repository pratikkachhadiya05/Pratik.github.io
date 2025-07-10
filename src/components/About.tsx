import React from 'react';
import { skills } from '../data/portfolio';
import type { PortfolioData } from '../types';

interface AboutProps {
  portfolioData?: PortfolioData;
}

const About: React.FC<AboutProps> = ({ portfolioData }) => {
  // const currentPersonalInfo = portfolioData?.personalInfo || personalInfo;
  const currentSkills = portfolioData?.skills || skills;

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Personal Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get to know me!
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer. I love the 
                  challenge of turning complex requirements into elegant, user-friendly solutions.
                </p>
                <p>
                  My journey in tech started with a curiosity about how things work on the 
                  internet. Since then, I've worked with Hackathon and 
                  helping juniors to build scalable applications that serve thousands of users.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge through 
                  technical writing.
                </p>
              </div>
              
              <div className="mt-8">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentSkills.frontend.map((skill: string) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentSkills.backend.map((skill: string) => (
                      <span
                        key={skill}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentSkills.database.map((skill: string) => (
                      <span
                        key={skill}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {[...currentSkills.tools, ...currentSkills.other].map((skill: string) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;