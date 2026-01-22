import React from 'react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 bg-gray-950">
      {/* Dark theme background with green accents */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(135deg, 
              rgba(17, 24, 39, 0.85) 0%,
              rgba(10, 10, 10, 0.75) 25%,
              rgba(34, 197, 94, 0.1) 50%,
              rgba(10, 10, 10, 0.75) 75%,
              rgba(17, 24, 39, 0.85) 100%
            ),
            radial-gradient(circle at 10% 20%, rgba(52, 211, 153, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 40%)
          `,
          backgroundColor: '#030712'
        }}
      />
      
      {/* Premium overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-green-900/10 -z-10" />
      
      {/* Subtle animated light elements */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-green-400/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[466px] lg:w-[400px] lg:h-[533px] bg-gray-900 rounded-2xl p-2 shadow-2xl shadow-black/40 overflow-hidden">
                <img
                  src="/IMG_3945.jpeg"
                  alt="A picture of John Kenzie Umpad"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center lg:text-left">
            {/* Accent line above heading */}
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-400 mb-8 rounded-full mx-auto lg:mx-0" />
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Hi, I'm John Kenzie Umpad, a Fullstack Developer
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
              I craft beautiful, responsive, and user-friendly web applications using React, Tailwind CSS, and modern web technologies. Let's build something extraordinary together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Get In Touch</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
