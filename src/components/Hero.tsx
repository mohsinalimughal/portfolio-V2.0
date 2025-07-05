import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import mohsinImage from './mohsin-ali-mughal.png'; // Adjust the path as necessary

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/mohsin_ali_mughal_official/',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohsin-ali-mughal-3118472ab/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/mohsinalimughal',
      label: 'GitHub',
      color: 'hover:text-gray-800'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=100092280105525',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/3012305038',
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className={`space-y-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
                HI THERE 👋, my name is
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                Mohsin Ali
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Mughal
                </span>
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Full Stack Developer | Team Leader | AI Explorer 💻
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg">
                Building digital experiences with the MERN Stack. Leading teams, exploring AI, and solving real-world problems through code.
              </p>
            </div>

            {/* Quote */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <blockquote className="text-gray-500 dark:text-gray-400 italic border-l-4 border-orange-500 pl-4 py-2">
                "Coding like poetry should be short and concise." — Santosh Kalwar
              </blockquote>
            </div>

            {/* Social Links */}
            <div className={`flex space-x-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative w-80 h-80 mx-auto">
              <div ></div>
              <div >
                <img
                z-index={10}
                  src={mohsinImage}
                  alt="Mohsin Ali Mughal"
                  className="w-100px h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;