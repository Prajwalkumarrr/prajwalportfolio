import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animated-grid opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Available for Opportunities</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-2"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
            >
              Prajwal Kumar
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-display font-semibold gradient-text mb-5"
            >
              Full-Stack Developer,
              AI & Machine Learning Enthusiast,
              Data Analytics Enthusiast,
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Motivated Information Technology undergraduate with hands-on experience in full-stack development, AI-driven applications, and cloud technologies,Data Analytics. Passionate about building scalable, high-performance software and real-world solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="gap-2 glow-effect">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Prajwalkumarrr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:uppalaprajwalkumar@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div> 

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 scale-110" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src={profileImage}
                  alt="Prajwal Kumar"
                  className="w-full h-full object-cover transform translate-y-0"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 scale-110"
              />

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -right-4 top-1/4 glass-card p-4 rounded-xl"
              >
                <p className="text-2xl font-bold gradient-text">8.0</p>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-muted-foreground">Scroll Down</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
