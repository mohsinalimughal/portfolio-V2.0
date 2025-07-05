import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Users, Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      type: 'work',
      title: 'Team Leader - Editing Team',
      company: 'Explosion Services',
      location: 'Karachi, Pakistan',
      period: '2024 - Present',
      description: 'Leading a talented squad to deliver high-impact documentation in the medical sales domain. Evolved from editing role to team leadership through ownership, empathy, and consistent growth.',
      achievements: [
        'Successfully transitioned from individual contributor to team leader',
        'Improved team productivity and documentation quality',
        'Mentored team members in professional development'
      ],
      icon: Briefcase,
      color: 'from-orange-500 to-red-600'
    },
    {
      type: 'education',
      title: 'Higher Secondary Education',
      company: 'The Citizens Foundation College (TCFC)',
      location: 'Karachi, Pakistan',
      period: 'Class of 2024',
      description: 'Developed leadership skills through public speaking, community participation, and student initiatives. Hosted stage events and drove various student programs.',
      achievements: [
        'Active public speaker and event host',
        'Led multiple student initiatives',
        'Developed strong communication and leadership skills'
      ],
      icon: GraduationCap,
      color: 'from-green-500 to-orange-600'
    }
  ];

  const specializations = [
    {
      title: 'Full Stack Development',
      description: 'MERN Stack specialist building scalable web applications',
      icon: '💻',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      title: 'Team Leadership',
      description: 'Leading and mentoring development teams to success',
      icon: '👥',
      technologies: ['Team Management', 'Mentoring', 'Project Planning']
    },
    {
      title: 'Cybersecurity',
      description: 'Exploring security practices and ethical hacking',
      icon: '🔐',
      technologies: ['Security Auditing', 'Penetration Testing', 'Risk Assessment']
    },
    {
      title: 'AI & Innovation',
      description: 'Leveraging AI tools to enhance development workflows',
      icon: '🤖',
      technologies: ['AI Integration', 'Automation', 'Machine Learning']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey as a builder of digital experiences, team leader, and lifelong learner
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                        <p className="text-lg text-orange-600 dark:text-orange-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Areas of Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-4 text-center">{spec.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 text-center">{spec.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">{spec.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {spec.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;