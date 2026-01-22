import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with product catalog, shopping cart, and secure checkout.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with real-time data, forecasts, and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'Redux'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Custom portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      link: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media performance and metrics.',
      technologies: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Video Streaming App',
      description: 'Streaming application with video upload, playback, and user subscriptions.',
      technologies: ['React', 'Express', 'MongoDB', 'AWS S3'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-emerald-400" />
            <span className="text-sm font-bold text-green-400 uppercase tracking-widest drop-shadow-sm">Portfolio</span>
            <div className="h-1 w-12 bg-gradient-to-l from-green-400 to-emerald-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl">
            A showcase of innovative projects that demonstrate expertise in modern web development and user-centric design
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
