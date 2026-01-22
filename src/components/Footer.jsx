import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const social = [
    { name: 'GitHub', href: 'https://github.com/umpad20', icon: 'GH' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'X' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 mt-32 px-4 sm:px-6 lg:px-8 border-t-2 border-green-500/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">John Kenzie Umpad</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting premium digital experiences with modern web technologies and a passion for excellence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">Navigation</h4>
            <ul className="space-y-3 list-none">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded px-1 py-0.5 text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">Connect</h4>
            <div className="flex gap-4">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 flex items-center justify-center font-bold text-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 transform hover:scale-110"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-xs">
            &copy; {currentYear} Dev Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
