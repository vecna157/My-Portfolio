import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  useEffect(() => {
    const injectSrc = 'https://cdn.botpress.cloud/webchat/v5.0/inject.js';
    const configSrc = 'https://files.bpcontent.cloud/2026/10/12/11/20261012115300-ZQSAL1UW.js';

    if (!document.querySelector(`script[src="${injectSrc}"]`)) {
      const script1 = document.createElement('script');
      script1.src = injectSrc;
      script1.async = true;
      script1.onload = () => {
        if (!document.querySelector(`script[src="${configSrc}"]`)) {
          const script2 = document.createElement('script');
          script2.src = configSrc;
          script2.defer = true;
          document.body.appendChild(script2);
        }
      };
      document.body.appendChild(script1);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
