import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Selected Work</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl">
            A showcase of my recent projects, hackathon contributions, and technical explorations.
          </p>
        </motion.div>

        <div className="space-y-16">
          {portfolioData.projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:border-primary/50 transition-colors"
            >
              
              {/* Project Visual Area */}
              <div className="lg:w-2/5 bg-secondary/50 relative overflow-hidden min-h-[300px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* 
                  PLACEHOLDER FOR PROJECT IMAGE
                  To add project image, use:
                  <img src="/path-to-image.jpg" alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                */}
                <div className="relative z-10 flex flex-col items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
                  <Code2 className="w-16 h-16 mb-4 opacity-50" />
                  <span className="font-semibold tracking-widest uppercase text-sm">Project Preview</span>
                </div>
              </div>

              {/* Project Info Area */}
              <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/50 text-accent-foreground text-xs font-semibold rounded-full mb-6 w-fit uppercase tracking-wider">
                  Featured Project
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                <h4 className="text-lg font-medium text-primary mb-6">{project.subtitle}</h4>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.demoUrl !== '#' ? (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground/50 font-medium rounded-lg cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo - Coming Soon
                    </span>
                  )}
                  
                  {project.githubUrl !== '#' ? (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/80 transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                      View Source
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/50 text-accent-foreground/50 font-medium rounded-lg cursor-not-allowed">
                      <Code2 className="w-4 h-4" />
                      GitHub - Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
