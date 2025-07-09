export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
  grade?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  avatar: string;
  resume: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
  other: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience?: Experience[];
  projects: Project[];
  skills: Skills;
}