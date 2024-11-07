"use client";
import { motion } from 'framer-motion'; 

export default function Services() {
  const services = [
    { id: "01", title: "Frontend Development", description: "We develop intuitive and visually appealing frontend solutions that enhance user experiences. We develop responsive and accessible web applications ensure optimal performance and seamless interaction across all devices." },
    { id: "02", title: "Modern Web Development", description: "We specialize in user-friendly design, speed optimization, and responsive functionality to help your business shine online." },
    { id: "03", title: "UI/UX Design", description: "We specialize in user-centered design, intuitive navigation, and aesthetic functionality to make your digital product both beautiful and effortless to use." },
    { id: "04", title: "Data Analyst", description: "We transform complex data into actionable insights, helping your business make smarter, data-driven decisions for growth and success." },
    { id: "05", title: "Machine Learning", description: "We provide solutions that transform your data into valuable insights, enhancing decision-making processes. We develop custom machine learning models tailored to your business needs." },
    { id: "06", title: "Logo Design", description: "We craft memorable, meaningful logos that capture the essence of your brand and make a lasting impression on your audience." },
  ];

  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }} // Slide down from top
          animate={{ opacity: 1, y: 0 }}   // End position
          transition={{ duration: 0.5 }}    // Animation duration
        >
          Our Services
        </motion.h2>
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }} // Start state for animation
              animate={{ opacity: 1, y: 0 }} // End state for animation
              transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered delay for each card
              className="relative bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <span className="text-6xl font-bold text-teal-400">
                {service.id}
              </span>
              <h3 className="text-2xl font-semibold mt-2 mb-4 cursor-pointer hover:text-teal-400 transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="absolute top-8 right-4 w-12 h-12 flex items-center justify-center bg-white text-gray-900 rounded-full hover:bg-teal-400 transition duration-300 cursor-pointer">
                <span className="text-2xl">&darr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
