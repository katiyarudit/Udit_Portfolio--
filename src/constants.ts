import { Project, Experience, Education, Translation } from './types';

export const CV_DATA = {
  name: "Udit Katiyar",
  title: "Data Analyst & ML Engineer",
  contact: {
    email: "uditkatiyar1105@gmail.com",
    linkedin: "www.linkedin.com/in/uditkatiyar05/",
    github: "github.com/katiyarudit",
    mobile: "+91-9120006966"
  },
  skills: {
    languages: ["Python", "Java", "C++"],
    frameworks: ["Scikit-Learn", "Prompt Engineering", "Transformers (LLM Basics)", "KPI Tracking"],
    tools: ["MySQL", "Google Colab", "GitHub", "Google Sheets", "Power BI", "Excel"],
    softSkills: ["Rapport Building", "Problem-Solving", "Analytical Thinking", "Communication", "Data Storytelling"]
  },
  experience: [
    {
      company: "DRDO",
      role: "Data Analyst Intern",
      period: "Jun 2025 - Jul 2025",
      description: [
        "Engineered a systematized analytics system combining an EDA platform with predictive models for defence vehicle health, in collaboration with E–F grade scientists.",
        "Conducted large-scale EDA and feature engineering to uncover operational trends, anomalies, and failure indicators, boosted data quality by 50%.",
        "Developed ML models and real-time visual analytics using Python (Pandas, NumPy, Scikit-learn), boosting pattern detection by 65% and reducing manual analysis by 40%.",
        "Integrated solutions into real-time analytics pipelines, enabling predictive insights and optimizing data efficiency by 40%."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "Predict Advertisement Campaign Success using Machine Learning",
      description: "Built a supervised ML model using Random Forest and Logistic Regression to predict ad campaign success on Kaggle marketing data. Enhanced engagement prediction accuracy by 45% via feature engineering and tuning.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      link: "https://github.com/katiyarudit",
      date: "Dec 2025"
    },
    {
      title: "Automated EDA & Feature Suggestion Dashboard",
      description: "Engineered an computerized EDA platform using Streamlit and Pandas, automating data exploration and insight generation. Incorporated real-time interactive visualizations, reducing manual EDA effort by 40%.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
      link: "https://github.com/katiyarudit",
      date: "Feb 2025"
    },
    {
      title: "Data Analysis Projects",
      description: "Designed interactive Excel dashboards for Olympics and Road Accident datasets using Pivot Tables, Slicers, and Visual Maps. Developed a Gym Membership Sales & Performance dashboard in Power BI.",
      tech: ["Excel", "Power BI", "DAX", "KPIs", "GitHub"],
      link: "https://github.com/katiyarudit",
      date: "Dec 2024"
    }
  ] as Project[],
  certifications: [
    "Privacy and Security in Online Social Media | NPTEL (Elite - 75%) | Oct 2025",
    "Oracle Cloud Infrastructure 2025 Certified Data Science Professional | Oracle | Sep 2025",
    "Oracle Cloud Infrastructure 2025 Certified Foundations Associate | Oracle | Aug 2025",
    "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM | Udemy | Jul 2025"
  ],
  stats: {
    leetcode: "100+",
    githubProjects: "10+",
    experienceMonths: "2+",
    cgpa: "8.47"
  },
  achievements: [
    {
      title: "Patent for AI-based posture correction system",
      description: "Devised real-time monitoring and feedback to enhance spinal alignment and ergonomics (Feb 2025).",
      date: "Feb 2025"
    },
    {
      title: "Research Paper on Underwater Acoustic Signal Classification",
      description: "Co-authored and submitted to a Journal, showing advancements made in the domain using ML, DL and signal processing (Aug 2025).",
      date: "Aug 2025"
    },
    {
      title: "LeetCode Milestone",
      description: "Solved over 100+ complex algorithmic problems on LeetCode, demonstrating strong problem-solving and algorithmic skills.",
      date: "Ongoing"
    }
  ],
  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Since Aug 2023",
      score: "CGPA: 8.47"
    },
    {
      institution: "Prabha Sunrise Educational Institute",
      degree: "Intermediate (Class XII)",
      period: "Apr 2020 - Mar 2021",
      score: "77%"
    },
    {
      institution: "Prabha Sunrise Educational Institute",
      degree: "High School (Class X)",
      period: "Apr 2018 - Mar 2019",
      score: "85%"
    }
  ] as Education[]
};

export const TRANSLATIONS: Translation = {
  en: {
    nav_home: "Home",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_projects: "Projects",
    nav_edu: "Education",
    nav_game: "Play",
    nav_contact: "Contact",
    hero_title: "Data Scientist & ML Engineer",
    hero_subtitle: "Architecting intelligent systems through data storytelling and predictive modeling.",
    skills_title: "Technical Arsenal",
    exp_title: "Professional Journey",
    projects_title: "Featured Projects",
    game_title: "Neural Network Collector",
    game_start: "Initialize System",
    game_score: "Data Collected",
    game_over: "System Overload!",
    contact_title: "Connect",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Transmit",
    lang_toggle: "Language",
    theme_toggle: "Theme"
  },
  hi: {
    nav_home: "मुख्य",
    nav_skills: "कौशल",
    nav_exp: "अनुभव",
    nav_projects: "परियोजनाएं",
    nav_edu: "शिक्षा",
    nav_game: "खेल",
    nav_contact: "संपर्क",
    hero_title: "डेटा वैज्ञानिक और एमएल इंजीनियर",
    hero_subtitle: "डेटा स्टोरीटेलिंग और प्रेडिक्टिव मॉडलिंग के माध्यम से बुद्धिमान सिस्टम का निर्माण।",
    skills_title: "तकनीकी कौशल",
    exp_title: "पेशेवर यात्रा",
    projects_title: "प्रमुख परियोजनाएं",
    game_title: "न्यूरल नेटवर्क कलेक्टर",
    game_start: "सिस्टम शुरू करें",
    game_score: "डेटा एकत्र",
    game_over: "सिस्टम ओवरलोड!",
    contact_title: "संपर्क करें",
    contact_name: "नाम",
    contact_email: "ईमेल",
    contact_message: "संदेश",
    contact_send: "भेजें",
    lang_toggle: "भाषा",
    theme_toggle: "थीम"
  },
  es: {
    nav_home: "Inicio",
    nav_skills: "Habilidades",
    nav_exp: "Experiencia",
    nav_projects: "Proyectos",
    nav_edu: "Educación",
    nav_game: "Jugar",
    nav_contact: "Contacto",
    hero_title: "Científico de Datos",
    hero_subtitle: "Arquitectando sistemas inteligentes mediante narración de datos.",
    skills_title: "Arsenal Técnico",
    exp_title: "Trayectoria Profesional",
    projects_title: "Proyectos Destacados",
    game_title: "Colector de Red Neuronal",
    game_start: "Inicializar",
    game_score: "Datos Recogidos",
    game_over: "¡Sobrecarga del Sistema!",
    contact_title: "Conectar",
    contact_name: "Nombre",
    contact_email: "Correo",
    contact_message: "Mensaje",
    contact_send: "Transmitir",
    lang_toggle: "Idioma",
    theme_toggle: "Tema"
  },
  fr: {
    nav_home: "Accueil",
    nav_skills: "Compétences",
    nav_exp: "Expérience",
    nav_projects: "Projets",
    nav_edu: "Éducation",
    nav_game: "Jouer",
    nav_contact: "Contact",
    hero_title: "Scientifique des Données",
    hero_subtitle: "Conception de systèmes intelligents via le storytelling de données.",
    skills_title: "Arsenal Technique",
    exp_title: "Parcours Professionnel",
    projects_title: "Projets Phares",
    game_title: "Collecteur de Réseau Neuronal",
    game_start: "Initialiser",
    game_score: "Données Collectées",
    game_over: "Surcharge Système!",
    contact_title: "Connecter",
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Transmettre",
    lang_toggle: "Langue",
    theme_toggle: "Thème"
  },
  de: {
    nav_home: "Startseite",
    nav_skills: "Fähigkeiten",
    nav_exp: "Erfahrung",
    nav_projects: "Projekte",
    nav_edu: "Bildung",
    nav_game: "Spielen",
    nav_contact: "Kontakt",
    hero_title: "Datenwissenschaftler",
    hero_subtitle: "Architektur intelligenter Systeme durch Data Storytelling.",
    skills_title: "Technisches Arsenal",
    exp_title: "Beruflicher Werdegang",
    projects_title: "Ausgewählte Projekte",
    game_title: "Neuronales Netz Sammler",
    game_start: "Initialisieren",
    game_score: "Daten Gesammelt",
    game_over: "Systemüberlastung!",
    contact_title: "Verbinden",
    contact_name: "Name",
    contact_email: "E-Mail",
    contact_message: "Nachricht",
    contact_send: "Senden",
    lang_toggle: "Sprache",
    theme_toggle: "Thema"
  }
};
