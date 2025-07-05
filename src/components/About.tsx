import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
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

  const skills = [
    'MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript',
    'Firebase', 'Git', 'Team Leadership', 'Public Speaking', 'Cybersecurity', 'AI Tools',
    'Real-time Applications', 'Responsive Design', 'Problem Solving'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my current skills
            mostly in terms of programming and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Get to Know Me */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get to Know Me!</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a <strong>Full Stack Developer</strong> specializing in the MERN Stack, building 
                digital experiences that are not just functional — but human-centered, scalable, and secure. 
                Every line of code I write is fueled by purpose, precision, and a deep-rooted passion to solve real-world problems.
              </p>
              <p>
                By day, I lead the Editing Team at <strong>Explosion Services</strong>, where I guide a talented 
                squad to deliver high-impact documentation in the medical sales domain. What began as a role in 
                editing soon evolved into team leadership — proof that ownership, empathy, and consistent growth always pay off.
              </p>
              <p>
                I'm a proud alumnus of <strong>The Citizens Foundation College, Class of 2024</strong> — a place that 
                shaped my voice as a public speaker and community participant. On the side, I explore cybersecurity 
                and AI tools while mentoring peers and crafting ideas that bridge creativity with technology.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </button>
          </div>

          {/* Skills */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;