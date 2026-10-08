import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { ShaderBackground } from '@/components/ui/kk';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Fluid Cursor-Reactive WebGL Mesh Background */}
      <ShaderBackground className="absolute inset-0 z-0" />

      {/* Subtle Ambient Vignette Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-background/30 backdrop-blur-[1px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Currently learning & building
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">
                {portfolioData.personal.name}.
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
            >
              {portfolioData.personal.role}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              {portfolioData.personal.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all group"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                download="Umang_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/80 transition-all group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </motion.div>
          </div>
          
          {/* Image/Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[2.5rem] transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500 blur-sm" />
              <div className="relative w-full h-full bg-background border-2 border-border/80 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/50">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-50 pointer-events-none" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
