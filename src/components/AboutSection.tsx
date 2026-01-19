import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Languages, Code2, Cloud, Brain, BarChart3 } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: 'Full-Stack Development', color: 'text-primary' },
    { icon: Brain, label: 'AI & Machine Learning', color: 'text-accent' },
    { icon: Cloud, label: 'Cloud Technologies', color: 'text-primary' },
    { icon: BarChart3, label: 'Data Analytics', color: 'text-primary' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get to know more about my background, education, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-semibold mb-6">Who I Am</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm a B.Tech Information Technology student at CVR College of Engineering, Hyderabad, with a strong passion for Software Engineering, Full-Stack Development, AI, and Cloud technologies,Data Analytics.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm adaptable, team-oriented, and have a strong communicator with a design-driven mindset. I thrive on building scalable, high-performance software solutions that make a real impact.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-4 gap-5">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-secondary/50"
                  >
                    <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color}`} />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Education</h4>
                  <p className="text-foreground font-medium">Bachelor of Technology – Information Technology</p>
                  <p className="text-muted-foreground">CVR College of Engineering, Hyderabad</p>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">CGPA: 8.0</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Expected: April 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Telugu', 'Hindi'].map((lang) => (
                      <span
                        key={lang}
                        className="px-4 py-1.5 rounded-full bg-secondary text-sm text-foreground"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
