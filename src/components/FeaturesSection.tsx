import { Mic, FileText, Home, Brain, Bot, Zap } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Mic,
    title: "Voice Assistant (Jarvis)",
    description: "Natural voice commands with offline speech recognition. Just say 'Hey Jarvis' and get instant career guidance.",
    details: ["Speech Recognition", "Voice Synthesis", "Natural Language Processing", "Offline Voice Commands"],
    color: "primary"
  },
  {
    icon: FileText,
    title: "Instant PDF Career Roadmap",
    description: "Generate comprehensive career roadmaps with course links, skill requirements, and project suggestions in seconds.",
    details: ["ReportLab PDF Generation", "Course Recommendations", "Skill Mapping", "Project Suggestions"],
    color: "secondary"
  },
  {
    icon: Brain,
    title: "AI Career Guidance",
    description: "Personalized career paths based on interests, skills, and market trends. Get internship and job recommendations.",
    details: ["Personalized Recommendations", "Market Analysis", "Skill Gap Analysis", "Career Path Mapping"],
    color: "primary"
  },
  {
    icon: Bot,
    title: "Discord Bot Integration",
    description: "Extend Jarvis to Discord servers for collaborative career planning and community guidance.",
    details: ["Discord API", "Community Features", "Group Planning", "Automated Responses"],
    color: "secondary"
  },
  {
    icon: Zap,
    title: "Advanced Features",
    description: "Additional capabilities including appointment scheduling, reminder systems, and productivity tools.",
    details: ["Smart Scheduling", "Reminder System", "Productivity Tools", "Calendar Integration"],
    color: "accent"
  }
];

export const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make Jarvis your ultimate AI career companion
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`feature-card relative overflow-hidden cursor-pointer transition-all duration-300 ${
                  isHovered ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated background glow */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : ''
                } ${
                  feature.color === 'primary' ? 'glow-primary' : 
                  feature.color === 'secondary' ? 'glow-secondary' : 'glow-accent'
                }`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    feature.color === 'primary' ? 'bg-primary/20' :
                    feature.color === 'secondary' ? 'bg-secondary/20' : 'bg-accent/20'
                  } ${isHovered ? 'scale-110' : ''}`}>
                    <Icon className={`w-8 h-8 ${
                      feature.color === 'primary' ? 'text-primary' :
                      feature.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature details */}
                  <div className={`space-y-2 transition-all duration-300 ${
                    isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-70'
                  }`}>
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          feature.color === 'primary' ? 'bg-primary' :
                          feature.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                        }`}></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`h-full ${
                      feature.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary-glow' :
                      feature.color === 'secondary' ? 'bg-gradient-to-r from-secondary to-secondary-glow' :
                      'bg-gradient-to-r from-accent to-accent-glow'
                    }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="feature-card inline-block">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to experience the future of career guidance?
            </p>
            <button className="btn-hero">
              Try Jarvis Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};