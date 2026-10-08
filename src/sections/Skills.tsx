import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
};

export function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Data & Tech', items: skills.data },
    { title: 'Tools', items: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A specialized toolkit tailored for frontend engineering, data science, and modern software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariant}
              className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-border/50">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariant}
                    className="group flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
