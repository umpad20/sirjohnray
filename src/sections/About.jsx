import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full flex flex-col items-center text-center">
          {/* Section header */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-emerald-400" />
            <span className="text-sm font-bold text-green-400 uppercase tracking-widest drop-shadow-sm">About Me</span>
            <div className="h-1 w-12 bg-gradient-to-l from-green-400 to-emerald-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight max-w-3xl">
            Passionate Developer, Creative Problem Solver
          </h2>

          <div className="space-y-6 max-w-3xl">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate frontend developer with a strong foundation in building intuitive, high-performance web applications. With expertise in React, JavaScript, TypeScript, and modern web technologies, I craft digital experiences that are both beautiful and functional. My approach combines technical precision with a deep understanding of user-centered design principles.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and adhering to accessibility standards that ensure inclusivity for all users. Throughout my career, I've collaborated with cross-functional teams to deliver projects that exceed expectations. I'm driven by the constant evolution of web technology and strive to stay ahead of industry trends while solving complex challenges with elegant solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Beyond development, I'm committed to continuous learning and sharing knowledge with the developer community. When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or diving into design systems that shape modern web applications. I'm always excited to connect with fellow developers and discuss how technology can create meaningful impact.
            </p>
          </div>

          {/* Stats section with premium styling */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
            <div className="group p-6 rounded-xl bg-gray-800/50 border-2 border-green-400/30 hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">50+</div>
              <p className="text-gray-300 font-semibold text-sm">Projects Completed</p>
            </div>
            <div className="group p-6 rounded-xl bg-gray-800/50 border-2 border-green-400/30 hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">5+</div>
              <p className="text-gray-300 font-semibold text-sm">Years Experience</p>
            </div>
            <div className="group p-6 rounded-xl bg-gray-800/50 border-2 border-green-400/30 hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-gray-300 font-semibold text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
