import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate network request for demonstration
    // To connect to a real backend, replace this setTimeout with fetch/axios
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's build something together.</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-2xl flex items-center justify-between group hover:border-primary/50 transition-colors">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</h4>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-xl font-medium hover:text-primary transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Send className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="w-full lg:w-1/2 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-background border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-shadow ${errors.name ? 'border-destructive focus:ring-destructive/30' : 'border-input focus:ring-primary/30 focus:border-primary'}`}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-background border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-shadow ${errors.email ? 'border-destructive focus:ring-destructive/30' : 'border-input focus:ring-primary/30 focus:border-primary'}`}
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-background border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-shadow resize-none ${errors.message ? 'border-destructive focus:ring-destructive/30' : 'border-input focus:ring-primary/30 focus:border-primary'}`}
                  placeholder="Hello Umang, I'd like to discuss..."
                  disabled={isSubmitting}
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </button>
              
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
