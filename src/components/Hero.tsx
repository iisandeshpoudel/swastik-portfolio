import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />

      <div className="relative z-10 text-center px-4">
        <div className="mb-8 hero-animate animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
            <img
              src="https://utfs.io/f/B6DsmGxxIuanDy2LDpdolnRFOarvMWUCpYQdbiJG6hsuz1VD"
              alt="Swastik Paudel"
              className="w-32 h-32 rounded-full relative border-2 border-teal-400 shadow-lg hover:border-teal-300 transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-4 tracking-tight hero-animate animate-slide-up">
          <span className="text-gradient">Swastik Paudel</span>
        </h1>
        <h2 className="text-xl text-teal-400 mb-6 hero-animate animate-slide-up font-medium">
          Software Engineer
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed hero-animate animate-slide-up">
          Passionate software engineer specializing in web development,
          automation, and bot development. Crafting elegant solutions to complex
          problems through clean, efficient code.
        </p>

        <div className="flex justify-center gap-6 mb-24 hero-animate animate-slide-up">
          <a
            href="https://github.com"
            className="p-2 rounded-lg bg-gray-800/50 text-teal-400 hover:text-teal-300 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="p-2 rounded-lg bg-gray-800/50 text-teal-400 hover:text-teal-300 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-2 rounded-lg bg-gray-800/50 text-teal-400 hover:text-teal-300 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
        >
          <ChevronDown className="w-8 h-8 text-teal-400 hover:text-teal-300 transition-colors" />
        </a>
      </div>
    </div>
  );
}
