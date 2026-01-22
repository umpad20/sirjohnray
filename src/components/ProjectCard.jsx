import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <article className="group bg-gray-800/50 border-2 border-green-400/30 rounded-xl overflow-hidden hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2 active:translate-y-0">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:from-emerald-400 group-hover:to-green-400 transition-all duration-300" />
      
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-bold px-3 py-1.5 bg-green-900/30 text-green-300 rounded-full border border-green-400/50 group-hover:bg-green-900/50 group-hover:border-green-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={link}
          className="text-base font-bold text-green-400 hover:text-green-300 inline-flex items-center gap-2 group/link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded transition-all duration-300"
        >
          <span className="underline-offset-4 decoration-green-400/30 hover:decoration-green-400 transition-all">View Project</span>
          <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
