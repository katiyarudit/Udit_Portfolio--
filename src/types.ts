export type ThemeType = 'dark' | 'light' | 'cyber' | 'minimal';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  date: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}
