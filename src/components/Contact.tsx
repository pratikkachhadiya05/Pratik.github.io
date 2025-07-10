import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin,Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { createClient } from '@supabase/supabase-js'

interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

interface PersonalInfo {
  email: string;
  phone: string;
  location: string;
  social: SocialLinks;
}

interface PortfolioData {
  personalInfo: PersonalInfo;
}

interface ContactProps {
  portfolioData?: PortfolioData;
}

const Contact: React.FC<ContactProps> = ({ portfolioData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const currentPersonalInfo = portfolioData?.personalInfo || personalInfo;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

const { name, email, message } = formData;
const supabaseUrl = 'https://zlrnvctdzximdyuuxrri.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpscm52Y3RkenhpbWR5dXV4cnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxMzgxODgsImV4cCI6MjA2NzcxNDE4OH0.hfj476q75NaPY4Bh7K29NCciaOv5qP2ne7Ib-4Nw_oQ';
const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase
    .from('messages')
    .insert([{ name, email, message }]);

  if (error) {
    console.error('Supabase insert error:', error);
    alert('❌ Failed to send message. Try again later.');
  } else {
    alert('✅ Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              I'd love to hear from you. Let's talk about your next project!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">{currentPersonalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">{currentPersonalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">{currentPersonalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href={currentPersonalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors"
                  >
                    <Github size={24} className="text-gray-700" />
                  </a>
                  <a
                    href={currentPersonalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition-colors"
                  >
                    <Linkedin size={24} className="text-blue-700" />
                  </a>
                 
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;