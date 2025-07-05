import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, FileText } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
  onResumeClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onResumeClick }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            variants={textVariants}
            className="mb-6"
          >
            <span className="text-primary text-lg font-medium">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent bg-size-200 animate-text-shimmer"
          >
            John Doe
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={textVariants}
            className="text-2xl md:text-4xl font-light mb-8 text-muted-foreground"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating beautiful, functional, and user-friendly applications. 
            I bring ideas to life through clean code and innovative design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={onContactClick}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-base font-medium"
            >
              <Mail className="mr-2" size={18} />
              Get In Touch
            </Button>
            
            <Button
              onClick={onResumeClick}
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 px-8 py-3 text-base font-medium"
            >
              <FileText className="mr-2" size={18} />
              View Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;