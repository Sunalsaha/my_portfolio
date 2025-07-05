import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Star } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Redux', 'Framer Motion'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather, forecasts, and interactive maps using third-party APIs.',
      image: '/api/placeholder/600/400',
      tech: ['Vue.js', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization, reporting, and performance tracking.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness application with workout tracking, progress monitoring, and social features.',
      image: '/api/placeholder/600/400',
      tech: ['React Native', 'Firebase', 'Redux', 'Charts'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, SEO optimization, and content management system.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'MDX', 'Prisma', 'Vercel', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      featured: false
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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group overflow-hidden bg-glass/30 backdrop-blur-sm border-glass-border hover:shadow-glow transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-secondary overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-mesh opacity-50"
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-4xl font-bold text-primary/30"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        color: "hsl(var(--primary))"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </motion.div>
                  </div>
                  {project.featured && (
                    <motion.div 
                      className="absolute top-4 right-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                      <Badge className="bg-primary text-primary-foreground">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <Star size={12} className="mr-1" />
                        </motion.div>
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                    initial={false}
                    animate={{ 
                      backdropFilter: "blur(8px)"
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button size="sm" variant="secondary">
                        <Code size={16} className="mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button size="sm">
                        View Demo
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <motion.h3 
                    className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 + 0.5, duration: 0.3 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-primary/20 hover:border-primary transition-colors cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Other Notable Projects
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group p-6 h-full bg-glass/30 backdrop-blur-sm border-glass-border hover:shadow-glow transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <motion.h4 
                      className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {project.title}
                    </motion.h4>
                    <motion.div 
                      className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: 10 }}
                      whileHover={{ x: 0 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Code size={14} />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 + index * 0.05 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.tech.length > 3 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
