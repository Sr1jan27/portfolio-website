import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const photos = isMobileView
    ? ["/images/11.jpg", "/images/14.jpeg"]
    : [
        "/images/11.jpg",
        "/images/12.jpg",
        "/images/13.jpg",
        "/images/14.jpeg",
        "/images/15.jpeg"
      ];
  const projects = [
    {
      title: "Life-touch: Yearbook",
      description: "Full-stack application using Angular, Spring Boot, and MySQL",
      tags: ["Angular", "Spring Boot", "MySQL", "Git"],
      link: "https://yearbook.lifetouch.com/",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "RBCARS",
      description: "Web application developed during freelance work",
      tags: ["Angular", "HTML", "CSS", "Git"],
      link: "https://rbcars.in/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quick Silver",
      description: "Interactive web application using JavaScript",
      tags: ["JavaScript", "HTML", "CSS", "Git"],
      link: "https://github.com/Sr1jan27/QuickSilver",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Amazing Animal Paintings",
      description: "E-commerce website with state management",
      tags: ["Angular", "NgRx", "TypeScript", "Git"],
      link: "https://github.com/Sr1jan27/AMAZING-ANIMAL-PAINTING",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const skillCategories = [
    {
      category: "Frameworks",
      skills: ["Spring Boot", "Angular", "Node.js", "Struts", "NPM"]
    },
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "SQL", "HTML", "CSS", "TypeScript", "Groovy"]
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub", "BitBucket"]
    },
    {
      category: "Libraries",
      skills: ["Bootstrap", "NgRx", "Spring Data JPA", "Spring Web"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "DBMS", "H2 Database"]
    },
    {
      category: "Development Tools",
      skills: ["VS Code", "Git", "IntelliJ", "Eclipse", "Workbench", "JIRA", "Confluence", "BitBucket", "Jenkins"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem-Solving", "Communication", "Leadership", "Agile Methodologies"]
    }
  ];

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
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
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/50 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="block px-3 py-2 text-gray-300 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" style={{ lineHeight: '2' }}>
            Srijan Raghuvanshi
          </h1>
          <p className="text-xl text-gray-300 mb-8">Full Stack Developer | Problem Solver</p>
          <p className="text-lg text-gray-300 mb-8">
            Full stack developer with over 2+ years of experience at Valuelabs, specializing in Java, Spring Boot, Angular, 
            and multiple web technologies. Proven track record of developing robust applications, 
            enhancing user interactions, and consistently solving complex technical challenges.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-8">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={photo}
                alt={`Gallery photo ${index + 1}`}
                className="object-cover w-full h-48 hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-16 px-4 relative bg-gray-900 flex justify-center items-center">
        <div className="max-w-7xl w-full text-center">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-gray-300 border-collapse mx-auto">
              <thead>
                <tr>
                  <th className="border-b border-gray-700 py-2 px-4">Category</th>
                  <th className="border-b border-gray-700 py-2 px-4">Skills</th>
                </tr>
              </thead>
              <tbody>
                {skillCategories.map((category, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2 px-4 font-semibold text-white bg-gray-800">{category.category}</td>
                    <td className="py-2 px-4 bg-gray-800">
                      {category.skills.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`bg-gradient-to-r ${project.gradient} px-3 py-1 rounded-full text-sm text-white text-center`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300"
                  >
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8">
            Currently working at Valuelabs and open to new opportunities
          </p>
          <a
            href="mailto:singhsrij2708@gmail.com"
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
