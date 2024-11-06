import React, { useEffect, useRef } from 'react';
import { GraduationCap, Brain, Code } from 'lucide-react';

export default function About() {
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
      { threshold: 0.2, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.about-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="py-24 bg-gray-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center about-animate animate-slide-up">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="about-animate animate-slide-up glass-effect p-8 rounded-xl border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500">
            <GraduationCap className="w-12 h-12 text-teal-400 mb-6 transform hover:rotate-12 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <p className="text-gray-300 leading-relaxed">B.E. in Computer Engineering with a focus on software development and systems design.</p>
          </div>
          
          <div className="about-animate animate-slide-up glass-effect p-8 rounded-xl border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
            <Brain className="w-12 h-12 text-teal-400 mb-6 transform hover:rotate-12 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-4">Expertise</h3>
            <p className="text-gray-300 leading-relaxed">Specialized in full-stack development, automation solutions, and building efficient bot systems.</p>
          </div>
          
          <div className="about-animate animate-slide-up glass-effect p-8 rounded-xl border border-gray-800/50 hover:border-teal-500/30 transition-all duration-500" style={{ transitionDelay: '200ms' }}>
            <Code className="w-12 h-12 text-teal-400 mb-6 transform hover:rotate-12 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-4">Approach</h3>
            <p className="text-gray-300 leading-relaxed">Committed to writing clean, maintainable code and creating intuitive user experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}