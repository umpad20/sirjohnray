import React from 'react';

const SkillCard = ({ skill, icon }) => {
  return (
    <div className="group p-5 sm:p-6 border-2 border-green-400/30 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/10 hover:bg-gray-800 transition-all duration-300 text-center cursor-default transform hover:scale-110 active:scale-95">
      <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block drop-shadow-md group-hover:drop-shadow-lg">
        {icon}
      </div>
      <p className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-green-300 transition-colors duration-200">
        {skill}
      </p>
    </div>
  );
};

export default SkillCard;
