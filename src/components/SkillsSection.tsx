import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'React / Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Language' },
    { name: 'Node.js / Express', level: 85, category: 'Backend' },
    { name: 'Python / Django', level: 80, category: 'Backend' },
    { name: 'PostgreSQL / MongoDB', level: 85, category: 'Database' },
    { name: 'AWS / Docker', level: 75, category: 'DevOps' },
    { name: 'Tailwind CSS', level: 95, category: 'Styling' },
    { name: 'GraphQL', level: 70, category: 'API' },
  ];

  const categories = [
    {
      title: 'Frontend Development',
      description: 'Creating beautiful, responsive user interfaces',
      techs: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'SASS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications',
      techs: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database & DevOps',
      description: 'Managing data and deployment pipelines',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'CI/CD'],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="p-6 h-full bg-glass/30 backdrop-blur-sm border-glass-border hover:shadow-glow transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-sm opacity-80" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-secondary/50 text-secondary-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Technical Proficiency
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-primary h-2 rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-text-shimmer" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;