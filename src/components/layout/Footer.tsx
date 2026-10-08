import { Mail, MapPin, ArrowUp, Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold tracking-tight mb-4">{portfolioData.personal.name}</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              {portfolioData.personal.description}
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-accent rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 bg-accent rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-foreground shrink-0" />
                <span>{portfolioData.personal.location}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-foreground shrink-0" />
                <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-foreground transition-colors">
                  {portfolioData.personal.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          
          <a 
            href="#home" 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            Back to top
            <span className="p-1 bg-accent rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
