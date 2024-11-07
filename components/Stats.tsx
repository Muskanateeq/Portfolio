"use client"; 
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 

const Stats = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    const yearsTimer = setInterval(() => {
      setYears((prev) => (prev < 6 ? prev + 1 : 6));
    }, 300); // Slowest increment for 'years'

    const projectsTimer = setInterval(() => {
      setProjects((prev) => (prev < 24 ? prev + 1 : 24));
    }, 100); // Faster increment for 'projects'

    const technologiesTimer = setInterval(() => {
      setTechnologies((prev) => (prev < 11 ? prev + 1 : 11));
    }, 210); // Moderate increment for 'technologies'

    const commitsTimer = setInterval(() => {
      setCommits((prev) => (prev < 499 ? prev + 12 : 499));
    }, 50); // Fastest increment for 'commits'

    // Clear intervals when component unmounts
    return () => {
      clearInterval(yearsTimer);
      clearInterval(projectsTimer);
      clearInterval(technologiesTimer);
      clearInterval(commitsTimer);
    };
  }, []);

  return (
    <div className="flex justify-center space-x-12 mt-10 px-4 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400">{years}</h2>
        <p>Months of experience</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.1 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400">{projects}</h2>
        <p>Projects completed</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400">{technologies}</h2>
        <p>Technologies mastered</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400 mr-2">{commits}</h2>
        <p>Code commits</p>
      </motion.div>
    </div>
  );
};

export default Stats;