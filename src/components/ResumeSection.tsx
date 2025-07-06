import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Briefcase, Code, Star } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const experience = [
    {
      title: '-',
      company: '--',
      period: '--',
      description: 'will be updating soon!  😅',
      achievements: ['-', '-', '-'],
    },
    {
      title: '-',
      company: '--',
      period: '--',
      description: 'will be updating soon!  😅',
      achievements: ['-', '-', '-'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Sister Nivedita University, Kolkata',
      period: '2023 - 2027',
      achievements: [],
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      school: 'General Assembly',
      period: '2024',
      achievements: ['Top 10% of cohort', 'Best Final Project Award'],
    },
  ];

  const certifications = [
    'Google Cloud Introduction to Generative AI',
    'IBM Generative AI: Introduction and Applications',
    'IBM Introduction to Artificial Intelligence (AI)',
    'University of Virginia Design Thinking Specialization',
    'University of Colorado Boulder Foundations of Data Structures and Algorithms Specialization',
    'DeepLearning.AI Knowledge Graphs for RAG',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            My professional journey, education, and achievements
          </p>
          <a
            href="/Resume.pdf"
            download="Sunal_Saha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <FileText size={16} className="mr-2" />
              Download PDF Resume
            </Button>
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experience.map((job, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="p-6 bg-glass/30 backdrop-blur-sm border-glass-border hover:shadow-glow transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">{job.title}</h4>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {job.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Key Achievements:</p>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <Star size={12} className="text-primary mr-2 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Code size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card className="p-6 bg-glass/30 backdrop-blur-sm border-glass-border hover:shadow-glow transition-all duration-300 h-full">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.school}</p>
                        <Badge variant="outline" className="mt-2">
                          {edu.period}
                        </Badge>
                      </div>

                      {edu.achievements.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-foreground">Achievements:</p>
                          <div className="flex flex-wrap gap-1">
                            {edu.achievements.map((a, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {a}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Star size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
            </div>

            <Card className="p-6 bg-glass/30 backdrop-blur-sm border-glass-border">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
