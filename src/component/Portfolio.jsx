import React, { useState } from 'react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Project 2",
      description: "Mobile-responsive e-commerce platform",
      tags: ["React", "Firebase", "Tailwind"],
      link: "#",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const extracurricular = [
    {
      title: "Chess Club President",
      period: "2022-2024",
      description: "Led weekly meetings and organized tournaments",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Volunteer Teaching Assistant",
      period: "2023-Present",
      description: "Helping students learn web development basics",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-md fixed w-full z-10 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Srijan Raghuvanshi
              </span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#activities" className="text-gray-300 hover:text-white transition-colors duration-300">Activities</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/50 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white">Projects</a>
              <a href="#activities" className="block px-3 py-2 text-gray-300 hover:text-white">Activities</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" style={{lineHeight:'2'}}>
            Hello, I'm Srijan Raghuvanshi
          </h1>
          <p className="text-xl text-gray-300 mb-8">Full Stack Developer | Open Source Enthusiast
          </p>
          <p className="text-xl text-gray-300 mb-8">I am working at Valuelabs as a full-stack software developer, where on daily basis I work with Angular and
             Spring boot for development works. As a full-stack developer my tech-stack includes Java, SQL, Html, CSS, JavaScript, Typescript, Angular, Spring Boot,
              Groovy, Gradle, Maven and angular cli. I am working at Valuelabs from last 2+ years, an while course I am working with my team on project named Yearbook.
             While the entire experience I have developed multiple web pages and worked on Api's to make seemless connection between the frontend and backend.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/srijansingh27/" className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:singhsrij2708@gmail.com" className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`bg-gradient-to-r ${project.gradient} px-3 py-1 rounded-full text-sm text-white`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-purple-400 hover:text-purple-300">
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities Section */}
      <section id="activities" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Extracurricular Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extracurricular.map((activity, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{activity.period}</p>
                  <p className="text-gray-300">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Contact Me
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;