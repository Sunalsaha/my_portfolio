import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ResumeSection from '@/components/ResumeSection';

import {
  Github,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from '@/components/ui/tooltip';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact', 'resume'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    const resumeElement = document.getElementById('resume');
    if (resumeElement) {
      resumeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="relative">
        <HeroSection onContactClick={handleContactClick} onResumeClick={handleResumeClick} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <ResumeSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-glass/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <TooltipProvider>
            <div className="flex justify-center space-x-6 mb-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/Sunalsaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  >
                    <Github size={22} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/sunal-saha-9b258128b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  >
                    <Linkedin size={22} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://twitter.com/sunalksaha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  >
                    <Twitter size={22} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:sunalsaha5803@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  >
                    <Mail size={22} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Mail Me</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <p className="text-muted-foreground">© 2024 Sunal Kumar Saha.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
