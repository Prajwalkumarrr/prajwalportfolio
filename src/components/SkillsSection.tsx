import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Palette, Cloud, Terminal, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    skills: [
      { name: 'JavaScript', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 90 },
      { name: 'C', level: 75 },
    ],
  },
  {
    title: 'Web & Backend',
    icon: Code,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'Flask', level: 75 },
      { name: 'RESTful APIs', level: 90 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    title: 'AI & Data',
    icon: Cloud,
    skills: [
      { name: 'Pandas', level: 80 },
      { name: 'Matplotlib', level: 75 },
      { name: 'Google Gemini API', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Android Studio', level: 70 },
    ],
  },
  {
    title: 'Design Tools',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Canva', level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="skill-bar-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
