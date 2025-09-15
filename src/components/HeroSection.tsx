import { Button } from "@/components/ui/button";
import { Bot, Download, Sparkles } from "lucide-react";
import jarvisIcon from "@/assets/jarvis-icon.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Particle background */}
      <div className="particles"></div>
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        {/* Floating Jarvis Orb */}
        <div className="flex justify-center mb-12">
          <div className="jarvis-orb flex items-center justify-center">
            <img 
              src={jarvisIcon} 
              alt="Jarvis AI Assistant" 
              className="w-24 h-24 object-contain opacity-90"
            />
          </div>
        </div>

        {/* Main Title */}
        <div className="fade-in-up animate space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block">Jarvis Assistant</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              with Career Guidance
            </span>
            <span className="block text-3xl md:text-4xl font-normal text-muted-foreground mt-4">
              Prototype
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            An AI-powered personal assistant + career mentor built for the future.
            <br />
            <span className="text-primary font-semibold">Voice commands • Smart guidance • Instant roadmaps</span>
          </p>
        </div>

        

        {/* Tech badges */}
        <div className="fade-in-up animate mt-16 flex flex-wrap justify-center gap-4">
          {['Voice AI', 'PDF Generation', 'Career Guidance', 'Offline-First'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 glass rounded-full text-sm font-medium border border-primary/30 hover:border-primary/60 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};