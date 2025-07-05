import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';
import mohsinImage from './mohsinlogo2.png'; 


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mohsinalimughal',
      label: 'GitHub',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohsin-ali-mughal-3118472ab/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/mohsin_ali_mughal_official/',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=100092280105525',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img src={mohsinImage} className='w-[50px]' alt="" />
              <div>
                <h3 className="text-xl font-bold">Mohsin Ali Mughal</h3>
                <p className="text-gray-400 text-sm">Web Developer</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              Building beautiful and functional web experiences with modern technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center space-x-2">
              <span>© {currentYear} Mohsin Ali Mughal. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of ☕</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;