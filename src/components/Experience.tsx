import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

// Placeholder logo imports (replace with actual logo paths or URLs)
 

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      company: 'Explosion Services',
      duration: '1 year 2 months',
      logo: "https://scontent.fkhi29-1.fna.fbcdn.net/v/t39.30808-6/449091156_779821094339302_3577495522253231840_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFgFLe6XYKtXeUD3WiN9n74RL6C7pUY-O9EvoLulRj472x7TP3__-o-dwhf8xOfrrRXxj8ZKCclNmTKDap-L0M5&_nc_ohc=Yw35qGN0UI0Q7kNvwHtbjPc&_nc_oc=Adnr7AdB4bzSej4qSXITLNDRzH-M_FaC0iqef-3V4JbV3XwAT_tm5sEsPDXtq6CD9yA&_nc_zt=23&_nc_ht=scontent.fkhi29-1.fna&_nc_gid=pc0pigFNsjY4JMDxXGXe2g&oh=00_AfaPbHPd5lCuXYvI0liG5WHlqcQpJt2QlnycdUozJ_TwVQ&oe=68C36B64", // Logo for Explosion Services
      roles: [
        {
          title: 'Team Lead',
          period: 'February 2025 - Present (8 months)',
          location: 'Karachi Division, Sindh, Pakistan',
          description: 'Significantly boosted team efficiency and reduced turnaround times. My journey from CSR to Team Lead in 7 months showcases strong performance, leadership, and attention to detail. Collaborate with QA and Operations for seamless delivery and client satisfaction.',
        },
        {
          title: 'Editor',
          period: 'November 2024 - March 2025 (5 months)',
          location: 'Karachi Division, Sindh, Pakistan',
          description: '',
        },
        {
          title: 'CSR',
          period: 'August 2024 - January 2025 (6 months)',
          location: 'Karāchi, Sindh, Pakistan',
          description: 'Handled outbound calls for U.S. clients on DME Braces and CGM campaigns, verifying insurance eligibility and ensuring accurate data entry. Developed communication skills, maintained HIPAA compliance, and collaborated to meet daily targets, building a foundation in U.S. healthcare processes.',
        },
      ],
    },
    {
      company: 'Erudite Coaching Centre',
      logo: `data:image/jpeg;base64,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`, // Logo for Erudite Coaching Centre
      roles: [
        {
          title: 'Web Development Intern',
          period: 'August 2025 - Present (2 months)',
          location: '',
          description: '',
        },
      ],
    },
    {
      company: 'On the Way',
      logo: `https://media.licdn.com/dms/image/v2/D4E0BAQE2fJB4fDDyOg/company-logo_200_200/company-logo_200_200/0/1723896865194?e=1759968000&v=beta&t=fbOh8_-SVzr3TOp5rTQnjALS0GhxZtfTgMoGLj1Ml8A`, // Logo for On the Way
      roles: [
        {
          title: 'Assistant Social Media Manager',
          period: 'October 2024 - January 2025 (4 months)',
          location: 'Karachi Division, Sindh, Pakistan',
          description: 'Managed digital content and led outreach campaigns as Assistant Social Media Manager and Head of Ambassadors at this Karachi-based delivery startup. Built a city-wide ambassador network and gained experience in branding and leadership, despite the startup shutting down.',
        },
      ],
    },
  
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="space-y-8">
          {/* Heading */}
          <div className={`space-y-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-center`}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
              Professional
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              A timeline of growth and innovation !
            </p>
          </div>

          {/* Experience List */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-center mb-4">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 mr-4 object-contain"
                    />
                  )}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.company}</h3>
                </div>
                {exp.duration && (
                  <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</p>
                )}
                {exp.roles.map((role, rIndex) => (
                  <div key={rIndex} className="mb-4 last:mb-0">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{role.title}</h4>
                    <div className="flex flex-col text-sm text-gray-500 dark:text-gray-400 space-y-2 mb-2">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {role.period}
                      </div>
                      {role.location && (
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {role.location}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-center`}>
            <blockquote className="text-gray-500 dark:text-gray-400 italic border-l-4 border-orange-500 pl-4 py-2 max-w-2xl mx-auto">
              "Experience is the teacher of all things." — Julius Caesar
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;