import React, { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-emerald-400" />
                <span className="text-sm font-bold text-green-400 uppercase tracking-widest drop-shadow-sm">Contact</span>
                <div className="h-1 w-12 bg-gradient-to-l from-green-400 to-emerald-400" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Let's Work Together
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Let's create something amazing together!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/50 p-8 sm:p-10 rounded-xl border border-green-400/30 shadow-2xl hover:shadow-green-500/10 transition-shadow duration-300">
            {submitted && (
              <div className="p-4 bg-green-900/50 border border-green-400/50 text-green-300 rounded-lg text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top">
                <span className="text-lg">✓</span>
                <span>Thank you for your message! I'll get back to you within 48 hours.</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-base font-semibold text-gray-100 mb-3">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-700 rounded-lg text-base bg-gray-900 text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:shadow-lg"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-100 mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-700 rounded-lg text-base bg-gray-900 text-gray-100 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:shadow-lg"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-semibold text-gray-100 mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-700 rounded-lg text-base bg-gray-900 text-gray-100 placeholder-gray-500 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent focus:shadow-lg"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            
            <div className="text-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;