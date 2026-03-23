import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  BrainCircuit, 
  Trophy, 
  GraduationCap,
  Gamepad2,
  ChevronRight,
  Languages,
  Terminal,
  Palette,
  BarChart3,
  Activity,
  Cpu
} from 'lucide-react';
import { CV_DATA, TRANSLATIONS } from './constants';
import { ThemeType } from './types';

// --- Background Animation ---
const AtmosphericBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-bg">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent),transparent_100%)] opacity-[0.02]" />
      
      {/* Moving Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px]"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/3 blur-[100px]"
      />

      <motion.div 
        animate={{ 
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ 
          backgroundImage: `radial-gradient(var(--fg) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} 
      />

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

// --- Components ---
const SkillCard = ({ cat, i }: { cat: any, i: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[320px] w-full perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden p-8 brutalist-border bg-bg/80 backdrop-blur-xl flex flex-col items-center justify-center text-center rounded-3xl group-hover:border-accent transition-colors shadow-2xl">
          <div className="text-accent mb-6 scale-150 group-hover:scale-110 transition-transform duration-500">
            {cat.icon}
          </div>
          <h3 className="text-2xl font-display uppercase tracking-tighter">{cat.title}</h3>
          <div className="mt-6 w-12 h-1 bg-accent/20 rounded-full group-hover:w-24 transition-all duration-500" />
          <p className="mt-4 text-[10px] font-mono opacity-40 uppercase tracking-widest">Hover to reveal arsenal</p>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden p-8 brutalist-border bg-accent text-bg flex flex-col items-center justify-center text-center rounded-3xl shadow-[0_0_50px_rgba(0,255,65,0.3)]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-xl font-display uppercase mb-6 border-b border-bg/20 pb-2 w-full">{cat.title}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {cat.items.map((item, idx) => (
              <motion.span 
                key={item}
                initial={{ opacity: 0, scale: 0 }}
                animate={isFlipped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="px-3 py-1 bg-bg/10 text-[10px] font-mono rounded-full border border-bg/20 uppercase tracking-wider"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Navbar = ({ theme, setTheme, t }: { 
  theme: ThemeType, 
  setTheme: (t: ThemeType) => void,
  t: any 
}) => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const themes: { id: ThemeType; label: string }[] = [
    { id: 'dark', label: 'Dark' },
    { id: 'light', label: 'Light' },
    { id: 'cyber', label: 'Cyber' },
    { id: 'minimal', label: 'Minimal' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/40 backdrop-blur-xl border-b border-fg/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-accent font-bold text-xl tracking-tighter flex items-center gap-2">
          <Activity size={20} />
          UDIT_DS.sys
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#home" className="hover:text-accent transition-colors">{t.nav_home}</a>
          <a href="#skills" className="hover:text-accent transition-colors">{t.nav_skills}</a>
          <a href="#experience" className="hover:text-accent transition-colors">{t.nav_exp}</a>
          <a href="#projects" className="hover:text-accent transition-colors">{t.nav_projects}</a>
          <a href="#contact" className="hover:text-accent transition-colors">{t.nav_contact}</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="p-2 border border-fg/10 rounded-lg hover:bg-fg/5 transition-all"
            >
              <Palette size={18} />
            </button>
            <AnimatePresence>
              {isThemeOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 bg-bg border border-fg/10 rounded-lg overflow-hidden shadow-2xl"
                >
                  {themes.map(th => (
                    <button 
                      key={th.id}
                      onClick={() => { setTheme(th.id); setIsThemeOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-xs hover:bg-accent hover:text-bg transition-colors ${theme === th.id ? 'text-accent' : ''}`}
                    >
                      {th.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ t }: { t: any }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Social Sidebar */}
      <div className="fixed left-8 bottom-24 z-40 hidden lg:flex flex-col gap-8 text-fg/40">
        <a href={`https://${CV_DATA.contact.github}`} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
          <Github size={24} />
        </a>
        <a href={`https://${CV_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
          <Linkedin size={24} />
        </a>
        <a href={`mailto:${CV_DATA.contact.email}`} className="hover:text-accent transition-colors">
          <Mail size={24} />
        </a>
      </div>

      {/* Resume Floating Button */}
      <a 
        href="/images/resume.pdf" 
        target="_blank" 
        rel="noreferrer"
        className="fixed right-8 bottom-8 z-40 flex items-center gap-3 font-mono text-sm tracking-widest text-fg/40 group cursor-pointer"
      >
        <span className="group-hover:text-accent transition-colors uppercase">RESUME</span>
        <div className="p-3 bg-fg/5 rounded-full group-hover:bg-accent/20 transition-all">
          <ChevronRight size={20} />
        </div>
      </a>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1.2 }}
          className="z-10 text-center lg:text-left"
        >
          <p className="text-accent font-mono text-lg mb-4 tracking-[0.2em]">HELLO! I'M</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] leading-[0.9] uppercase break-words mb-8 tracking-tighter">
            {CV_DATA.name.split(' ')[0]}<br />
            <span className="text-accent">{CV_DATA.name.split(' ')[1]}</span>
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-fg/60 font-mono text-xl tracking-widest uppercase">Machine Learning</p>
            <p className="text-fg font-display text-4xl md:text-6xl uppercase tracking-tighter">Researcher & Engineer</p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full animate-pulse" />
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto brutalist-border overflow-hidden bg-fg/5">
            <img 
              src="/images/image1.jpeg" 
              alt={CV_DATA.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/udit/800/1000";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-accent opacity-40" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-accent opacity-40" />
        </motion.div>

        {/* Mobile Image (Visible only on small screens) */}
        <div className="lg:hidden w-full max-w-xs mx-auto aspect-square rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl">
          <img 
            src="/images/image1.jpeg" 
            alt={CV_DATA.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/seed/udit/400/400";
            }}
          />
        </div>
      </div>
    </section>
  );
};

const AboutMe = ({ t }: { t: any }) => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="absolute -left-10 top-0 text-accent opacity-10 font-display text-9xl select-none">01</div>
          <h2 className="text-accent font-mono uppercase tracking-[0.3em] mb-8">ABOUT ME</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            {t.hero_title} with hands-on experience in building Machine Learning Models. Skilled in Python, TensorFlow, PyTorch, and scikit-learn. Passionate about creating high-performance solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-8">
          {[
            { label: "LeetCode Solved", value: CV_DATA.stats.leetcode },
            { label: "Projects Built", value: CV_DATA.stats.githubProjects },
            { label: "Current CGPA", value: CV_DATA.stats.cgpa },
            { label: "Months Interned", value: CV_DATA.stats.experienceMonths }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20, 
                delay: i * 0.1 
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="p-8 brutalist-border bg-fg/5 rounded-3xl group hover:bg-accent/5 transition-colors"
            >
              <p className="text-5xl font-display text-accent mb-2 group-hover:scale-110 transition-transform">{stat.value}</p>
              <p className="text-xs font-mono uppercase tracking-widest opacity-40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ t }: { t: any }) => {
  const categories = [
    { title: "Languages", items: CV_DATA.skills.languages, icon: <Code2 size={24} /> },
    { title: "Frameworks", items: CV_DATA.skills.frameworks, icon: <BrainCircuit size={24} /> },
    { title: "Tools", items: CV_DATA.skills.tools, icon: <Database size={24} /> },
    { title: "Soft Skills", items: CV_DATA.skills.softSkills, icon: <BarChart3 size={24} /> }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-fg/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <h2 className="font-display text-6xl md:text-8xl italic mb-4 uppercase tracking-tighter">Technical <span className="text-accent">Arsenal</span></h2>
          <div className="w-24 h-1 bg-accent rounded-full mb-4" />
          <p className="text-fg/40 font-mono text-xs uppercase tracking-[0.5em]">Hover cards to reveal technologies</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100, scale: 0.5, rotate: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                duration: 0.8, 
                delay: i * 0.1,
                bounce: 0.4 
              }}
            >
              <SkillCard cat={cat} i={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = ({ t }: { t: any }) => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-display text-6xl md:text-8xl italic mb-4">My career &<br /><span className="text-accent">experience</span></h2>
        </div>
        
        <div className="space-y-32">
          {CV_DATA.experience.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 150, scale: 0.7, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", duration: 1.2, bounce: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-4">
                <h3 className="text-4xl font-bold mb-2">{exp.role}</h3>
                <p className="text-accent text-xl font-mono">{exp.company}</p>
              </div>
              
              <div className="lg:col-span-2 flex flex-col items-center">
                <span className="text-6xl font-display opacity-40 mb-4">{exp.period.split(' ')[2]}</span>
                <div className="w-px h-32 bg-gradient-to-b from-accent to-transparent relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_#00ff41]" />
                </div>
              </div>

              <div className="lg:col-span-4 text-fg/60 text-lg leading-relaxed space-y-4">
                {exp.description.map((line, idx) => (
                  <p key={idx} className="flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0">•</span>
                    {line}
                  </p>
                ))}
              </div>

              <div className="lg:col-span-2 flex justify-center">
                <div className="w-24 h-24 p-4 bg-fg/5 brutalist-border rounded-3xl flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <img 
                    src="/images/image2.png" 
                    alt="DRDO Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/DRDO_Logo.svg/1200px-DRDO_Logo.svg.png";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = ({ t }: { t: any }) => {
  return (
    <section id="achievements" className="py-24 px-6 bg-fg/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl mb-16 italic uppercase tracking-widest">Patents & Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CV_DATA.achievements.map((ach, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -150 : 150, scale: 0.5, rotateY: i % 2 === 0 ? -45 : 45 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", duration: 1, delay: i * 0.1, bounce: 0.4 }}
              className="p-10 brutalist-border bg-bg relative overflow-hidden group rounded-3xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {ach.title.includes('Patent') ? <Cpu size={80} /> : <BrainCircuit size={80} />}
              </div>
              <div className="relative z-10">
                <span className="text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4 block">{ach.date}</span>
                <h3 className="text-3xl font-bold mb-6">{ach.title}</h3>
                <p className="text-fg/60 text-lg leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = ({ t }: { t: any }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-fg/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl mb-16 italic">{t.projects_title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CV_DATA.projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 100, scale: 0.5, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", duration: 0.8, delay: i * 0.1, bounce: 0.5 }}
              whileHover={{ y: -15, scale: 1.05, rotate: 0 }}
              className="p-8 brutalist-border bg-bg flex flex-col rounded-3xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/10 rounded">
                  <Terminal size={24} className="text-accent" />
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-fg/40 hover:text-accent">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-fg/60 text-sm mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 border border-fg/10 rounded uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = ({ t }: { t: any }) => {
  return (
    <section id="education" className="py-24 px-6 bg-fg/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl mb-16 italic">Education</h2>
        <div className="space-y-8">
          {CV_DATA.education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", duration: 0.8, delay: i * 0.1 }}
              className="p-8 brutalist-border bg-bg rounded-3xl"
            >
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-accent font-mono">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-fg/40 font-mono">{edu.period}</p>
                  <p className="text-accent font-bold">{edu.score}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ t }: { t: any }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-24 px-6 bg-fg/5 relative overflow-hidden"
    >
      {/* Spotlight effect */}
      <div 
        className="absolute pointer-events-none w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y, 
          transform: 'translate(-50%, -50%)' 
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <h2 className="font-display text-7xl mb-8 italic">{t.contact_title}</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-fg/5 brutalist-border group-hover:bg-accent/10 transition-colors rounded-2xl">
                <Mail className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-fg/40 uppercase font-mono tracking-widest">Email</p>
                <p className="text-xl">{CV_DATA.contact.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-fg/5 brutalist-border group-hover:bg-accent/10 transition-colors rounded-2xl">
                <Phone className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-fg/40 uppercase font-mono tracking-widest">Mobile</p>
                <p className="text-xl">{CV_DATA.contact.mobile}</p>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6 p-10 brutalist-border bg-bg/50 backdrop-blur-xl rounded-3xl"
        >
          <div className="space-y-2">
            <label className="text-xs uppercase font-mono tracking-widest text-fg/40">{t.contact_name}</label>
            <input 
              type="text" 
              required
              value={formState.name}
              onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-fg/5 border border-fg/10 p-4 focus:border-accent outline-none transition-colors" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-mono tracking-widest text-fg/40">{t.contact_email}</label>
            <input 
              type="email" 
              required
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-fg/5 border border-fg/10 p-4 focus:border-accent outline-none transition-colors" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-mono tracking-widest text-fg/40">{t.contact_message}</label>
            <textarea 
              rows={4} 
              required
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
              className="w-full bg-fg/5 border border-fg/10 p-4 focus:border-accent outline-none transition-colors" 
            />
          </div>
          <button 
            disabled={status === 'sending' || status === 'success'}
            className="w-full py-4 bg-accent text-bg font-bold uppercase tracking-widest hover:bg-fg hover:text-bg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'idle' && t.contact_send}
            {status === 'sending' && 'TRANSMITTING...'}
            {status === 'success' && 'MESSAGE RECEIVED!'}
          </button>
          
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent font-mono text-xs text-center"
            >
              Thank you! I'll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-fg/10 text-center">
      <p className="text-fg/20 font-mono text-xs uppercase tracking-[0.5em]">
        © {new Date().getFullYear()} UDIT KATIYAR • ALL_RIGHTS_RESERVED
      </p>
    </footer>
  );
};

// --- Main App ---

const Certifications = ({ t }: { t: any }) => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl mb-16 italic uppercase tracking-widest">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CV_DATA.certifications.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", duration: 1, delay: i * 0.1, bounce: 0.4 }}
              className="p-8 brutalist-border bg-fg/5 flex items-start gap-4 rounded-3xl"
            >
              <div className="p-3 bg-accent/10 rounded-lg">
                <Trophy size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">{cert}</h3>
                <p className="text-xs font-mono text-accent mt-2 uppercase">Verified</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const t = TRANSLATIONS.en;

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      <AtmosphericBackground />
      <div className="bg-grid opacity-20" />
      <div 
        className="cursor-glow hidden md:block" 
        style={{ left: mousePos.x, top: mousePos.y }} 
      />
      
      <Navbar theme={theme} setTheme={setTheme} t={t} />
      
      <main className="relative z-10">
        <Hero t={t} />
        <AboutMe t={t} />
        <Skills t={t} />
        <Achievements t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Education t={t} />
        <Certifications t={t} />
        <Contact t={t} />
      </main>

      <Footer />
    </div>
  );
}
