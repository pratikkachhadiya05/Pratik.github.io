import { Project, Education} from '../types';

export const personalInfo = {
  name: "Pratik",
  title: "Full Stack Developer",
  email:" pratikkachhadiy77@gmail.com",
  phone: "+91 90163 65917",
  location: "Ahmedabad, Gujarat, India",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions that solve real-world problems and deliver exceptional user experiences.",
 avatar: 'https://pratikkachhadiya05.github.io/Pratik.github.io/profile.jpg',
  resume: "/pratik-kachhdiya-resume.pdf",
  social: {
    github: "https://github.com/pratikkachhadiya05",
    linkedin: "https://www.linkedin.com/in/pratik-kachhadiya-7a60ba374/",
    // website: "https://pratikkachhdiya.dev"
  }
};

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Gujarat Technological University",
    year: "2023-2027",
    description: "Specialized in Software Engineering and Web Development.",
    grade: "CGPA: 8.5/10"
  },
  {
    id: "2",
    degree: "Higher Secondary Certificate (Science)",
    institution: "Gujarat State Board",
    year:"2021-2023",
    description: "Focused on Mathematics, Physics, and Chemistry with Computer Science as an additional subject. Developed early interest in programming.",
    grade: "Percentage: 85%"
  },
  {
    id: "3",
    degree: "Full Stack Web Development Certification",
    institution: "FreeCodeCamp",
    year: "2022",
    description: "Comprehensive certification covering modern web development technologies including React, Node.js, MongoDB, and responsive web design.",
    grade: "Certificate of Completion"
  }
];


export const projects: Project[] = [
  {
    id: "1",
    title: "E-Learning Platform",
    description: "A comprehensive e-learning platform with course management, video streaming, progress tracking, and interactive quizzes. Built with React and Node.js.",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    githubUrl: "https://github.com/pratikkachhdiya/elearning-platform",
    liveUrl: "https://elearning-demo.vercel.app",
    featured: true
  },
  {
    id: "2",
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with order management, inventory tracking, billing system, and customer management features.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Firebase", "Material-UI", "Node.js"],
    githubUrl: "https://github.com/pratikkachhdiya/restaurant-management",
    liveUrl: "https://restaurant-mgmt-demo.netlify.app",
    featured: true
  },
  {
    id: "3",
    title: "Personal Finance Tracker",
    description: "A web application to track personal expenses, income, and financial goals with beautiful charts and analytics dashboard.",
    image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Vue.js", "Chart.js", "Express.js", "MySQL"],
    githubUrl: "https://github.com/pratikkachhdiya/finance-tracker",
    liveUrl: "https://finance-tracker-demo.herokuapp.com",
    featured: false
  },
];

export const skills = {
  frontend: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express.js", "Python", "PHP", "REST APIs", "GraphQL"],
  database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Webpack", "Vite"],
  other: ["Agile/Scrum", "Responsive Design", "SEO", "Performance Optimization"]
};