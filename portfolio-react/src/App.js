// EnhancedPortfolio.jsx - Filled Hero Section with Tagline + Stats
// Professional content added to home section [file:32]

import React, { useState, useEffect } from 'react';

const EnhancedPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = ['home', 'about me & my experience', 'skills', 'projects', 'contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const section = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });
      if (section) setActiveSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = {
    name: 'Kumar Harsh',
    title: 'Software Development Engineer III',
    email: 'kharsh041@gmail.com',
    phone: '+91 8210138096',
    tagline: 'Building Scalable SaaS Products with React Ecosystem',
    stats: {
      years: '7+',
      projects: '50+',
      companies: '4',
      lines: '100K+'
    },
    'about me & my experience': 'Frontend specialist with 7+ years building scalable SaaS products using modern React ecosystem',
    experiences: [
      { company: 'IQVIA', role: 'SDE III', period: 'May 2023 - Present', tech: 'ReactJS, Redux Toolkit, KendoReact' },
      { company: 'HCL Technologies', role: 'Senior SDE', period: 'May 2021 - May 2023', tech: 'React, Redux-Saga, TypeScript' },
      { company: 'Avish Websoft', role: 'Software Engineer', period: 'Mar 2019 - Mar 2021', tech: 'React Native, Strapi CMS' }
    ],
    skills: ['ReactJS', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Redux Saga', 'NodeJS', 'Sass', 'KendoReact', 'GraphQL', 'MongoDB', 'Jest'],
    projects: [
      { name: 'CTP payment 2.0', desc: 'clinical trails payment portal', tech: 'React Redux-toolkit NodeJs TypeScript Styled-Components GraphQL' },
      { name: 'SmartSolve plateform', desc: 'low code platform ', tech: 'React TypeScript jest NodeJs Cursor' },
      { name: 'ANZ Business Advantage', desc: 'Enterprise banking platform for ANZ customers', tech: 'React Redux-Saga TypeScript Sass NodeJS GraphQL' },
      { name: 'Share Investing ANZ', desc: 'Trading platform UI', tech: 'React TypeScript Sass NodeJS GraphQL' },
      { name: 'AnyTime ClapTalk Platform', desc: 'gamification experience for Kid to learn about world travel', tech: 'React TypeScript NodeJS Less Redux-Saga Ant-Design' },
      { name: 'Clinic Insights', desc: 'Healthcare feature and appointment app', tech: 'React NodeJS Redux-Saga Ant-Design' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-900">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-blue-100/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
            KH
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`py-2 px-6 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25'
                    : 'bg-white/50 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-blue-100/50'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 border-t border-blue-100 px-6 pb-6 backdrop-blur-md shadow-lg">
            <div className="grid grid-cols-2 gap-4 pt-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`py-4 px-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'bg-blue-50 text-slate-700 hover:bg-blue-100 hover:shadow-xl border border-blue-200'
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ENHANCED Hero Section - Now FILLED with Content */}
      <section id="home" className="min-h-screen flex items-center justify-center p-8 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-indigo-500/2 to-purple-500/3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8">
          {/* LEFT: Enhanced Content */}
          <div className="space-y-8 text-center lg:text-left lg:pr-12">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
                Kumar Harsh
              </h1>
              <div className="w-28 h-1 bg-gradient-to-r from-gold-500 via-amber-500 to-orange-500 rounded-full mx-auto lg:mx-0 mb-6" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-tight">
                {data.title}
              </p>
              
              {/* TAGLINE - NEW */}
              <p className="text-xl md:text-2xl text-blue-700 font-semibold italic mb-12 max-w-xl mx-auto lg:mx-0 bg-blue-50/50 px-6 py-4 rounded-2xl backdrop-blur-sm border border-blue-200/50">
                "{data.tagline}"
              </p>

              {/* STATS CARDS - NEW */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto lg:mx-0">
                <div className="group p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-3xl font-black text-blue-600 group-hover:text-blue-700 mb-2">{data.stats.years}</div>
                  <div className="text-slate-600 font-semibold text-sm uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="group p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-3xl font-black text-emerald-600 group-hover:text-emerald-700 mb-2">{data.stats.projects}</div>
                  <div className="text-slate-600 font-semibold text-sm uppercase tracking-wide">Projects Delivered</div>
                </div>
                <div className="group p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-3xl font-black text-purple-600 group-hover:text-purple-700 mb-2">{data.stats.companies}</div>
                  <div className="text-slate-600 font-semibold text-sm uppercase tracking-wide">Companies</div>
                </div>
                <div className="group p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-2">
                  <div className="text-3xl font-black text-orange-600 group-hover:text-orange-700 mb-2">{data.stats.lines}</div>
                  <div className="text-slate-600 font-semibold text-sm uppercase tracking-wide">Lines of Code</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href={`mailto:${data.email}`}
                className="px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-3xl font-bold text-xl shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-3 transition-all duration-500 border border-blue-200/50 group"
              >
                <span className="group-hover:hidden">Contact Me</span>
                <span className="hidden group-hover:block flex items-center gap-2">
                  Start Project <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
              <a
                href={data.linkedin}
                className="px-12 py-6 bg-white/90 hover:bg-white border-2 border-slate-300 hover:border-blue-400 rounded-3xl font-bold text-xl hover:shadow-2xl hover:text-blue-700 transition-all duration-500 flex items-center justify-center gap-2 group"
              >
                View Profile
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Cropped Professional Photo */}
          <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-lg">
            <div className="relative group">
              <img
                src="data:image/jpeg;base64,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"
                alt="Kumar Harsh - Professional Headshot"
                className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-8 border-white/80 group-hover:border-blue-300/90 hover:scale-110 hover:rotate-1 transition-all duration-1000 origin-center mx-auto lg:mx-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl -m-2 shadow-2xl backdrop-blur-sm" />
              
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-gold-400 to-orange-500 rounded-full shadow-xl blur-xl opacity-70 animate-pulse" />
            </div>
            
            {/* Location badge */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl border border-blue-200 text-sm font-semibold text-slate-800 flex items-center gap-2">
              📍 {data.location}
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about me & my experience" className="py-32 px-8 max-w-6xl mx-auto bg-white/50 backdrop-blur-xl rounded-4xl mx-8 md:mx-auto shadow-2xl border border-blue-100/50">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-gold-500 rounded-full mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xl text-slate-700 leading-relaxed mb-12 max-w-2xl">{data['about me & my experience']}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-4 text-blue-600">📧</div>
                <div className="font-mono text-lg font-semibold text-slate-800">{data.email}</div>
              </div>
              <div className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-4 text-emerald-600">📱</div>
                <div className="font-mono text-lg font-semibold text-slate-800">{data.phone}</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {data.experiences.map((exp, i) => (
              <div key={i} className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 mb-2">{exp.role}</h4>
                    <p className="text-slate-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-bold">{exp.period}</span>
                </div>
                <p className="text-slate-600 mb-4">{exp.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">
            Technical Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-gold-500 rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {data.skills.map((skill, i) => (
            <div
              key={i}
              className="group p-10 bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-500 shadow-xl cursor-pointer"
            >
              <div className="text-2xl font-black text-slate-800 group-hover:text-blue-600 mb-6 transition-all duration-500 text-center">
                {skill}
              </div>
              <div className="h-3 bg-slate-200 rounded-full overflow-hidden mx-auto w-3/4">
                <div className="h-full bg-gradient-to-r from-blue-500 to-gold-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 max-w-6xl mx-auto bg-gradient-to-b from-blue-50/50 to-indigo-50/50 rounded-4xl mx-8 md:mx-auto shadow-2xl border border-blue-100/30">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-gold-500 rounded-full mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white backdrop-blur-xl rounded-4xl p-10 border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 shadow-xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-6 text-slate-900 group-hover:text-blue-700 transition-all duration-500">{project.name}</h3>
                <p className="text-slate-700 mb-8 leading-relaxed group-hover:text-slate-900">{project.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.split(' ').map((tech, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-bold border border-blue-200 group-hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-xl rounded-4xl p-20 border border-blue-100/50 shadow-2xl">
          <div className="text-center">
            <h2 className="text-6xl font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-8">
              Let's Collaborate
            </h2>
            <p className="text-2xl text-slate-700 mb-16 max-w-2xl mx-auto leading-relaxed">
              Ready to build enterprise-grade solutions? Get in touch today.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
              <div className="group p-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-4xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-blue-200 cursor-pointer">
                <div className="text-4xl mb-6 text-blue-600">📧</div>
                <div className="text-2xl font-mono font-bold text-slate-900">{data.email}</div>
              </div>
              <div className="group p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-4xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-emerald-200 cursor-pointer">
                <div className="text-4xl mb-6 text-emerald-600">📱</div>
                <div className="text-2xl font-mono font-bold text-slate-900">{data.phone}</div>
              </div>
            </div>
            <div className="flex justify-center gap-16 pt-12 border-t border-slate-200">
              <a href={data.linkedin} className="text-5xl hover:scale-125 hover:text-blue-600 transition-all duration-500 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                📘
              </a>
              <a href={data.github} className="text-5xl hover:scale-125 hover:text-slate-700 transition-all duration-500 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                💻
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections remain the same - About, Skills, Projects, Contact */}
      {/* [Previous sections unchanged for brevity] */}

      <footer className="py-16 text-center border-t-4 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <p className="text-slate-600 font-semibold text-lg">© 2026 Kumar Harsh | Software Development Engineer III</p>
        <p className="text-slate-500 mt-2">Pune, India | Crafting scalable enterprise solutions</p>
      </footer>
    </div>
  );
};

export default EnhancedPortfolio;
