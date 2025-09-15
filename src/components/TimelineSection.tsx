import { Mic, MessageSquare, Bot, FileDown, Home, Plus } from "lucide-react";

const timelineSteps = [
  {
    step: 1,
    icon: Mic,
    title: "Voice Activation",
    description: "User says 'Hey Jarvis' to activate the AI assistant",
    details: "Speech recognition activates and begins listening for commands",
    color: "primary"
  },
  {
    step: 2,
    icon: MessageSquare,
    title: "Interest Input",
    description: "User provides their field of interest or career questions",
    details: "Natural language processing understands user intent and preferences",
    color: "secondary"
  },
  {
    step: 3,
    icon: Bot,
    title: "AI Processing",
    description: "Jarvis analyzes the input and generates personalized career plan",
    details: "AI algorithms match user interests with career paths and opportunities",
    color: "accent"
  },
  {
    step: 4,
    icon: FileDown,
    title: "PDF Generation",
    description: "Comprehensive career roadmap is generated and saved as PDF",
    details: "Includes courses, skills, projects, and timeline with direct links",
    color: "primary"
  }
];

export const TimelineSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the seamless journey from voice command to career guidance
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
          
          {/* Timeline steps */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.step} className={`relative flex items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } fade-in-up`}>
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="feature-card">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                          step.color === 'primary' ? 'bg-primary/20' :
                          step.color === 'secondary' ? 'bg-secondary/20' : 'bg-accent/20'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            step.color === 'primary' ? 'text-primary' :
                            step.color === 'secondary' ? 'text-secondary' : 'text-accent'
                          }`} />
                        </div>
                        <span className={`text-2xl font-bold ${
                          step.color === 'primary' ? 'text-primary' :
                          step.color === 'secondary' ? 'text-secondary' : 'text-accent'
                        }`}>
                          Step {step.step}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <p className="text-sm text-muted-foreground/80 italic">{step.details}</p>
                    </div>
                  </div>

                  {/* Central node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-background shadow-lg ${
                      step.color === 'primary' ? 'bg-primary glow-primary' :
                      step.color === 'secondary' ? 'bg-secondary glow-secondary' : 'bg-accent glow-accent'
                    }`}>
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16 fade-in-up">
          <div className="feature-card inline-block">
            <div className="flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold">Plus Many More Features!</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Discord bot integration, smart scheduling, productivity tools, and continuous learning capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Real-time Updates',
                'Multi-language Support', 
                'Offline Functionality',
                'Data Privacy',
                'Custom Integrations'
              ].map((feature) => (
                <span 
                  key={feature}
                  className="px-3 py-1 glass rounded-full text-sm border border-accent/30"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};