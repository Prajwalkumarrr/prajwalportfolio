import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles, FileText, Bot, Brain, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI-Based Personal Finance Management System',
    description: 'A comprehensive financial management platform with AI-powered insights, automated expense categorization, and interactive data visualizations.',
    icon: Brain,
    techStack: ['MERN', 'Python', 'Flask', 'Pandas', 'Matplotlib', 'Google Gemini API'],
    features: [
      'Budgeting & expense tracking',
      'AI-powered financial insights',
      'Automated expense categorization',
      'Interactive data visualizations',
    ],
    codeUrl: 'https://github.com/Prajwalkumarrr/AI-finacial-assistant',
    demoUrl: 'https://finance-demo.example.com',
    color: 'from-primary to-accent',
  },
  {
    title: 'AI Resume Builder',
    description: 'An intelligent resume builder that leverages AI to generate professional content, with live preview and PDF export capabilities.',
    icon: FileText,
    techStack: ['Python', 'Streamlit', 'Google Gemini API', 'ReportLab'],
    features: [
      'AI-generated resume content',
      'Live resume preview',
      'PDF export functionality',
      'NLP-based section enhancement',
    ],
    codeUrl: 'https://github.com/AnjithSuryaVamshi/Ai-Resume-Builder',
    demoUrl: 'https://resume-builder.example.com',
    color: 'from-accent to-primary',
  },
  {
    title: 'E-commerce Platform with AI Recommendations',
    description: 'A full-featured e-commerce platform with AI-powered product recommendations and personalized shopping experience.',
    icon: ShoppingCart,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow.js'],
    features: [
      'AI-powered product recommendations',
      'User authentication & authorization',
      'Shopping cart & checkout',
      'Order tracking system',
    ],
    codeUrl: 'https://github.com/yourusername/ecommerce-ai',
    demoUrl: 'https://ecommerce-demo.example.com',
    color: 'from-purple-500 to-pink-500',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Showcasing my best work in AI and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-9xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="glass-card p-8 rounded-2xl h-full transition-all duration-500 hover:border-primary/50">
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="w-3 h-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/code"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.codeUrl, '_blank');
                    }}
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full gap-2 transition-all duration-300 hover:bg-primary/10 hover:scale-[1.02] hover:shadow-md relative overflow-hidden"
                    >
                      <Github className="w-4 h-4 transition-transform duration-300 group-hover/code:scale-110" />
                      <span className="relative">
                        Code
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/code:w-full"></span>
                      </span>
                    </Button>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/demo"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demoUrl, '_blank');
                    }}
                  >
                    <Button 
                      size="sm" 
                      className="w-full gap-2 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg relative overflow-hidden"
                    >
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/demo:scale-110" />
                      <span className="relative">
                        Live Demo
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover/demo:w-full"></span>
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
