import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  const personalInfo = {
    name: 'Vidhya Dharan S S',
    title: 'Information Technology Student',
    email: 'hvdrksp2003@gmail.com',
    phone: '+91 8608281767',
    location: 'Madurai, India',
  };

  const skills = [
    'Java', 'C#', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'XML', 'AngularJS', 'Web3.js',
    'Oracle', 'MATLAB', 'AutoCAD', 'Blockchain', 'Machine Learning', 'Ethical Hacking'
  ];

  const projects = [
    {
      title: 'CRYPTODEX',
      description: 'A Uniswap based crypto marketplace designed using the principle of atomic swaps.',
      technologies: 'Blockchain, Kubernetes Integration',
    },
    {
      title: 'Landslide Prediction System',
      description: 'A web application to predict landslides at ease.',
      technologies: 'HTML5, CSS3, ReactJS, PHP, MySQL',
    },
    {
      title: 'Carbon Credit Marketplace for SMBs',
      description: 'Real-time carbon credit generation and issuance on the blockchain.',
      technologies: 'Consortium blockchain, Cosmos Integration',
    },
    {
      title: 'Movie Watchlist Application',
      description: 'A movie watchlist application with a user interface similar to LetterBoxD.',
      technologies: 'HTML5, CSS, AngularJS, PHP, NodeJS',
    },
  ];

  const experiences = [
    {
      title: 'InLab Intern',
      company: 'Thiagarajar College of Engineering',
      duration: 'Jan 4, 2023 - Jan 20, 2023',
      description: 'Worked on React, GIT, Data Analytics, Machine Learning, and Integration techniques.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-sans">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
        <nav>
          <ul className="flex space-x-4">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${
                    activeSection === section ? 'font-bold' : ''
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'home' && (
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4">{personalInfo.name}</h2>
              <p className="text-2xl mb-8">{personalInfo.title}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-3xl hover:text-gray-300"><FaGithub /></a>
                <a href="#" className="text-3xl hover:text-gray-300"><FaLinkedin /></a>
                <a href={`mailto:${personalInfo.email}`} className="text-3xl hover:text-gray-300"><FaEnvelope /></a>
              </div>
            </div>
          )}

          {activeSection === 'about' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="mb-4">
                I am a passionate Information Technology student at Thiagarajar College of Engineering,
                with a strong interest in blockchain technology, cryptography, and machine learning.
                My goal is to develop my technical expertise through self-learning and contribute to
                innovative projects in the field of IT.
              </p>
            </div>
          )}

          {activeSection === 'skills' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-2">{project.description}</p>
                    <p className="text-sm opacity-75">Technologies: {project.technologies}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              {experiences.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-lg">{exp.company}</p>
                  <p className="text-sm opacity-75">{exp.duration}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'contact' && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
              <p className="mb-2">Email: {personalInfo.email}</p>
              <p className="mb-2">Phone: {personalInfo.phone}</p>
              <p>Location: {personalInfo.location}</p>
            </div>
          )}
        </motion.section>
      </main>
    </div>
  );
};

export default Portfolio;