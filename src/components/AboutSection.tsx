import { Brain, Target, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About the Project
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing career guidance through AI-powered assistance and smart automation
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Problem Statement */}
          <div className="feature-card fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-destructive">The Problem</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Students struggle with career confusion, lack of personalized guidance, and limited access to 
              comprehensive roadmaps. Traditional career counseling is often generic, expensive, and not 
              available 24/7 when students need it most.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                Limited personalized career guidance
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                Lack of instant, actionable roadmaps
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                No integration with modern smart systems
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="feature-card fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">Our Solution</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Jarvis Assistant combines AI-powered career guidance with voice commands, instant PDF generation, 
              and smart home integration. It provides personalized roadmaps, skill recommendations, and 
              real-time assistance - all working offline-first.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                AI-powered personalized career guidance
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Instant PDF roadmap generation
              </div>
            </div>
          </div>
        </div>

        {/* Key Innovation Points */}
        <div className="feature-card fade-in-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Key Innovations</h3>
          </div>
          
          {/* Changed to 2 cols so no gap */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">AI</span>
              </div>
              <h4 className="font-semibold mb-2">Offline-First AI</h4>
              <p className="text-sm text-muted-foreground">
                Works without internet connectivity for privacy and accessibility
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold">📄</span>
              </div>
              <h4 className="font-semibold mb-2">Instant PDF Reports</h4>
              <p className="text-sm text-muted-foreground">
                Generate comprehensive career roadmaps with course links instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
