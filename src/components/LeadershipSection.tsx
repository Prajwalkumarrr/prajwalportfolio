import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Palette, Calendar, Trophy } from 'lucide-react';

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Leadership & <span className="gradient-text">Activities</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Making an impact beyond code
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent p-0.5">
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <Palette className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold text-xl">Design Lead</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      Leadership Role
                    </span>
                  </div>
                  
                  <p className="text-primary font-medium mb-2">GDGC Club, CVR College of Engineering</p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    Nov 2024 – June 2025
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        Led design initiatives for tech events, ensuring cohesive branding and visual identity
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">
                        Supported Google Solution Challenge 2025 with 50+ participating teams
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
