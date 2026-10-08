import { motion } from 'framer-motion';
import { MapPin, BookOpen, Trophy, Award, FileText, ExternalLink, Plus } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function About() {
  return (
    <section id="about" className="py-20 bg-background/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Column: Story & Resume */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* My Story */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="prose prose-invert max-w-none"
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                My Story
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {portfolioData.about.story}
              </p>
            </motion.div>

            {/* Resume Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-card border border-border p-8 rounded-2xl shadow-sm"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    My Resume
                  </h3>
                  <p className="text-muted-foreground">
                    Download my resume to learn more about my education, skills, projects, and experience.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a 
                    href={portfolioData.personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors text-center"
                  >
                    View Resume
                  </a>
                  <a 
                    href={portfolioData.personal.resumeUrl}
                    download="Umang_Raj_Resume.pdf"
                    className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-center"
                  >
                    Download
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-8 border-l-2 border-border pl-6 ml-3">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                    <h4 className="text-xl font-medium">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Sidebar Column: Address, Hobbies, Achievements, Certifications */}
          <div className="space-y-8">
            
            {/* Address */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-card border border-border p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </h3>
              <p className="text-muted-foreground">
                {portfolioData.personal.location}
              </p>
            </motion.div>

            {/* Hobbies */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-card border border-border p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.hobbies.map((hobby, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg flex items-center gap-1"
                  >
                    {hobby === 'Add hobby' && <Plus className="w-3 h-3" />}
                    {hobby}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-card border border-border p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Achievements
              </h3>
              {portfolioData.achievements.length > 0 ? (
                <ul className="space-y-4">
                  {portfolioData.achievements.map((ach, idx) => (
                    <li key={idx} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium">{ach.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{ach.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-sm">Achievement details coming soon</p>
              )}
            </motion.div>

            {/* Certifications */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-card border border-border p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              {portfolioData.certifications.length > 0 ? (
                <ul className="space-y-4">
                  {portfolioData.certifications.map((cert, idx) => (
                    <li key={idx} className="group border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex items-start gap-3">
                          {cert.logoUrl && (
                            <div className="w-10 h-10 rounded-lg bg-white p-1 shrink-0 flex items-center justify-center border border-border shadow-sm">
                              <img src={cert.logoUrl} alt={cert.organization} className="w-full h-full object-contain" />
                            </div>
                          )}
                          <div>
                            <span className="text-xs uppercase font-semibold text-muted-foreground tracking-wider block mb-0.5">
                              {cert.organization}
                            </span>
                            <h4 className="font-medium text-base text-foreground leading-snug">{cert.title || cert.name}</h4>
                          </div>
                        </div>
                        {cert.url && (
                          <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-primary flex items-center gap-1 shrink-0 mt-1 hover:underline"
                          >
                            View Certificate <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cert.description}</p>
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {cert.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="text-[11px] px-2 py-0.5 bg-accent rounded text-muted-foreground">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-sm">Certificate links coming soon</p>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
