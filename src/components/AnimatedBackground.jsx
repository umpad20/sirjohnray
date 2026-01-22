import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated background with floating shapes
 * Subtle, non-distracting animations for visual interest
 */
const AnimatedBackground = () => {
  const shapes = [
    { id: 1, size: 'w-64 h-64', top: '10%', left: '5%', delay: 0 },
    { id: 2, size: 'w-48 h-48', top: '60%', right: '10%', delay: 0.5 },
    { id: 3, size: 'w-52 h-52', top: '30%', right: '15%', delay: 1 },
    { id: 4, size: 'w-40 h-40', bottom: '10%', left: '20%', delay: 1.5 },
  ];

  const shapeVariants = {
    animate: (delay) => ({
      y: [0, -30, 0],
      transition: {
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

      {/* Animated shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} rounded-full opacity-5 bg-gradient-to-br from-gray-800 to-gray-600`}
          style={{
            top: shape.top,
            right: shape.right,
            left: shape.left,
            bottom: shape.bottom,
          }}
          variants={shapeVariants}
          animate="animate"
          custom={shape.delay}
        />
      ))}

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-3 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22none%22 stroke=%22%23000%22 stroke-width=%220.5%22 width=%22100%22 height=%22100%22/></svg>')]" />
    </div>
  );
};

export default AnimatedBackground;
