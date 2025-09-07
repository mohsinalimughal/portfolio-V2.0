import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import portfolioImage from './portfolioss.jpeg'; // Adjust the path as necessary
import chatAppImage from './chat-app.png'; // Adjust the path as necessary

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Dopefolio',
      description: 'A successful Open-Source portfolio template that has been featured on major tech sites like CSS-Tricks and Hostinger. Used by thousands of developers globally to showcase their work.',
      image: `${portfolioImage}`,
      githubUrl: 'https://github.com/mohsinalimughal/mohsin-ali-portfolio',
      liveUrl: 'https://mohsinali.site/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      title: 'Real-time Chat Application',
      description: 'A full-stack real-time chat application built with the MERN stack and Socket.io. Features include real-time messaging, user authentication, and Firebase integration for invite systems.',
      image: `${chatAppImage}`,
      githubUrl: 'https://github.com/mohsinalimughal/chat-app',
      liveUrl: 'https://chat-app-iota-orpin-15.vercel.app/about',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Firebase']
    },
 
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here you will find some of the personal and client projects that I created,
            with each project containing its own case study
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={20} />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;