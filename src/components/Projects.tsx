import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Automation Bot",
    description: "Developed a sophisticated bot system for automated inventory management and price tracking across multiple platforms.",
    tech: ["Python", "Selenium", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Portfolio Generator",
    description: "Created a dynamic portfolio generator using React and Node.js, featuring customizable themes and content management.",
    tech: ["React", "Node.js", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Task Management API",
    description: "Built a RESTful API for task management with authentication, real-time updates, and data visualization.",
    tech: ["Django", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.project-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" className="py-24 bg-gray-800" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center project-animate animate-slide-up">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-animate animate-slide-up glass-effect rounded-xl overflow-hidden border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm bg-gray-900/50 text-teal-400 rounded-full hover:bg-gray-900 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="p-2 rounded-lg bg-gray-900/50 text-teal-400 hover:text-teal-300 hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live} 
                    className="p-2 rounded-lg bg-gray-900/50 text-teal-400 hover:text-teal-300 hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}