"use client"
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createElement = (type: 'circle' | 'dot') => {
      const element = document.createElement('div');
      const size = type === 'circle' ? Math.random() * 10 + 5 : Math.random() * 3 + 1;
      const color = Math.random() < 0.5 ? 'white' : 'teal';
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      element.style.position = 'absolute';
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.backgroundColor = color;
      element.style.borderRadius = type === 'circle' ? '50%' : '0';
      element.style.top = `${top}%`;
      element.style.left = `${left}%`;
      element.style.opacity = '0.6';

      // Apply the appropriate animation class
      element.classList.add(type === 'circle' ? 'animate-move-circle' : 'animate-move-dot');

      container.appendChild(element);

      // Remove the element after some time to prevent memory leaks
      setTimeout(() => {
        element.remove();
      }, 10000);
    };

    const interval = setInterval(() => {
      createElement('circle');
      createElement('dot');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }} />;
};

export default AnimatedBackground;