import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "100%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn more about my journey, passion, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              Hello! I'm John, a passionate developer based in San Francisco.
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm a full-stack developer with over 3 years of experience creating digital experiences 
              that are not only functional but also beautiful and user-friendly. My journey in web 
              development started with a curiosity about how things work behind the scenes.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I specialize in React, Node.js, and modern web technologies. I love turning complex 
              problems into simple, beautiful designs. When I'm not coding, you'll find me exploring 
              new technologies, contributing to open source, or enjoying a good cup of coffee.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating applications that provide 
              real value to users. My goal is to make the web a better place, one project at a time.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-secondary">
              <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-primary/20 rounded-full blur-xl animate-glow-pulse" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-glass/30 backdrop-blur-sm rounded-lg border border-glass-border">
                <p className="text-sm text-foreground/80">
                  "Code is poetry written in logic"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="p-6 text-center bg-glass/30 backdrop-blur-sm border-glass-border hover:shadow-glow transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;