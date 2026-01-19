import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'ElevAIte Labs',
    period: 'Jan 2024 – Present',
    description: [
      'ElevAIte Labs Website:',
      '• Developed the official company website from scratch',
      '• Implemented responsive UI with smooth animations and modern design',
      '• Worked on frontend + backend integration for seamless user experience',
      '• Built RESTful APIs and ensured system reliability and performance',
      '',
      'Beecho - Mobile App:',
      '• Contributing to a platform connecting creators, brands, and event organizers',
      '• Working on influencer discovery & collaboration features',
      '• Improving app flow, UX, and feature stability'
    ],
    current: true,
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'
                } pl-8 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div className={`absolute ${
                  index % 2 === 0 ? 'left-0 md:left-auto md:-right-3' : 'left-0 md:-left-3'
                } top-0 w-6 h-6 rounded-full bg-background border-4 border-primary z-10`}>
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors">
                  <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                        Current
                      </span>
                    )}
                  </div>

                <ul className={`space-y-2 text-muted-foreground text-sm ${
  index % 2 === 0 ? 'md:text-left' : ''
}`}>
  {exp.description.map((item, i) => {
    if (item.endsWith(':')) {
      return (
        <li key={i} className="font-medium text-foreground mt-4 first:mt-0">
          {item}
        </li>
      );
    } else if (item.startsWith('•')) {
      return (
        <li key={i} className="flex items-start gap-2 group">
          <span className="text-primary flex-shrink-0">•</span>
          <span className="group-hover:text-foreground transition-colors">
            {item.replace('•', '').trim()}
          </span>
        </li>
      );
    } else if (item === '') {
      return <div key={i} className="h-4" />; // Add spacing between projects
    }
    return (
      <li key={i} className="pl-4">
        {item}
      </li>
    );
  })}
</ul> 

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
