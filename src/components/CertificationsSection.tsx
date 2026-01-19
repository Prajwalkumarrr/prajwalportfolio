import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Google Cloud Computing Certification',
    issuer: 'Google',
    year: '2025',
    color: 'from-blue-500 to-green-500',
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'AWS Academy',
    year: '2025',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'GenAI Powered Data Analytics',
    issuer: 'TATA (Forage)',
    year: '2025',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Celonis Business Analyst Certification',
    issuer: 'AICTE',
    year: '2024',
    color: 'from-primary to-accent',
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="glass-card p-6 rounded-2xl h-full text-center hover:border-primary/50 transition-all duration-300">
                {/* Badge Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} p-0.5`}>
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <Award className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                <h3 className="font-display font-semibold text-sm mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                
                <div className="flex items-center justify-center gap-1 text-xs text-primary">
                  <Calendar className="w-3 h-3" />
                  {cert.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
