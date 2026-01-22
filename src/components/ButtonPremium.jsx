import React from 'react';

/**
 * Premium Button Component - Industry-ready with confident styling
 * WCAG 2.1 AA+ with strong visual feedback
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  ariaLabel,
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95';

  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-black focus-visible:outline-gray-900 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-100 text-gray-900 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 focus-visible:outline-gray-900',
    tertiary: 'text-gray-900 hover:bg-gray-50 active:bg-gray-100 focus-visible:outline-gray-900',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-base rounded-lg',
    lg: 'px-7 py-3.5 text-lg rounded-xl',
    xl: 'px-8 py-4 text-lg rounded-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
