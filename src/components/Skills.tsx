import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Django", level: 85 },
  { name: "Flask", level: 80 },
  { name: "Web Scraping", level: 90 },
  { name: "SQL", level: 75 },
  { name: "Docker", level: 70 }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className="py-24 bg-gray-900" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center animate-slide-up">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        
        <div className="grid gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-effect p-6 rounded-xl border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-teal-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-teal-400"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transition: `width 1.2s ${index * 0.1}s cubic-bezier(0.4, 0, 0.2, 1)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}