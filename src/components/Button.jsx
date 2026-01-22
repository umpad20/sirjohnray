import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  children, 
  ...props 
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded-lg inline-flex items-center justify-center gap-2 cursor-pointer transform active:scale-95';

  const variants = {
    primary: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 active:from-green-700 active:to-emerald-800 shadow-lg hover:shadow-xl hover:shadow-green-500/20',
    secondary: 'bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-500/10 active:bg-green-500/20 shadow-md hover:shadow-lg',
    ghost: 'text-green-400 hover:bg-green-500/10 active:bg-green-500/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
