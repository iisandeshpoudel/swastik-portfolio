import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        element.style.transform = `translate3d(0, ${rate}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;