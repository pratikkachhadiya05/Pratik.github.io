import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolio';
import type { Education as EducationType, PortfolioData } from '../types';



interface EducationProps {
  portfolioData?: PortfolioData;
}

const Education: React.FC<EducationProps> = ({ portfolioData }) => {
  const currentEducation = portfolioData?.education || education;

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <p className="text-xl text-gray-600">
              My academic journey and continuous learning path
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {currentEducation.map((edu: EducationType) => (
                <div key={edu.id} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-20 bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-blue-600 mb-2">
                          <GraduationCap size={20} className="mr-2" />
                          <span className="text-lg font-semibold">{edu.institution}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center text-gray-500 mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.year}</span>
                        </div>
                        {edu.grade && (
                          <div className="flex items-center text-green-600">
                            <Award size={16} className="mr-2" />
                            <span className="font-semibold">{edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;