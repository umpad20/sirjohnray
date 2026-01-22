import React from 'react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skills = [
    { skill: 'React', icon: '⚛️' },
    { skill: 'JavaScript', icon: '📝' },
    { skill: 'TypeScript', icon: '🔷' },
    { skill: 'Tailwind CSS', icon: '🎨' },
    { skill: 'Framer Motion', icon: '✨' },
    { skill: 'Node.js', icon: '🔧' },
    { skill: 'Express', icon: '⚙️' },
    { skill: 'MongoDB', icon: '🗄️' },
    { skill: 'PostgreSQL', icon: '📊' },
    { skill: 'Git', icon: '📦' },
    { skill: 'REST APIs', icon: '🔌' },
    { skill: 'Figma', icon: '🎯' },
  ];

  return (
    <section id="skills" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-emerald-400" />
            <span className="text-sm font-bold text-green-400 uppercase tracking-widest drop-shadow-sm">Expertise</span>
            <div className="h-1 w-12 bg-gradient-to-l from-green-400 to-emerald-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
            Technical Skills & Tools
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl">
            A comprehensive toolkit of modern technologies and frameworks to deliver scalable, performant solutions
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl">
            {skills.map((item, index) => (
              <SkillCard key={index} skill={item.skill} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
