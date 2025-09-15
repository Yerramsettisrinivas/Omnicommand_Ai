import { Code, Database, Cpu, Mic, FileText, Bot, Smartphone, Wifi } from "lucide-react";

const techCategories = [
  {
    category: "AI & Machine Learning",
    icon: Bot,
    color: "primary",
    technologies: [
      { name: "Python", description: "Core AI development language" },
      { name: "Speech Recognition", description: "Voice command processing" },
      { name: "Natural Language Processing", description: "Intent understanding" },
      { name: "Machine Learning", description: "Career path recommendations" }
    ]
  },
  {
    category: "Voice & Audio",
    icon: Mic,
    color: "secondary",
    technologies: [
      { name: "Pyttsx3", description: "Text-to-speech conversion" },
      { name: "SpeechRecognition", description: "Voice input processing" },
      { name: "Audio Processing", description: "Real-time voice analysis" },
      { name: "Offline TTS", description: "Local voice synthesis" }
    ]
  },
  {
    category: "Document Generation",
    icon: FileText,
    color: "accent",
    technologies: [
      { name: "ReportLab", description: "PDF generation library" },
      { name: "Dynamic Content", description: "Personalized roadmaps" },
      { name: "Template Engine", description: "Structured document creation" },
      { name: "Rich Formatting", description: "Professional PDF layouts" }
    ]
  },
  {
    category: "Web & APIs",
    icon: Wifi,
    color: "secondary",
    technologies: [
      { name: "Discord API", description: "Bot integration platform" },
      { name: "REST APIs", description: "External service integration" },
      { name: "Web Scraping", description: "Real-time data collection" },
      { name: "JSON Processing", description: "Data format handling" }
    ]
  }
];

export const TechStackSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge technologies for reliability, performance, and innovation
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div key={index} className="feature-card fade-in-up">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      category.color === "primary"
                        ? "bg-primary/20"
                        : category.color === "secondary"
                        ? "bg-secondary/20"
                        : "bg-accent/20"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        category.color === "primary"
                          ? "text-primary"
                          : category.color === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="border-l-2 border-muted pl-4 hover:border-primary/50 transition-colors"
                    >
                      <h4 className="font-semibold text-foreground">{tech.name}</h4>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Overview */}
        <div className="feature-card fade-in-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A robust, modular architecture designed for scalability, maintainability, and offline-first functionality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                <span className="text-primary font-bold text-lg">AI</span>
              </div>
              <h4 className="font-bold mb-2">AI Core Engine</h4>
              <p className="text-sm text-muted-foreground">
                Central intelligence processing voice commands, analyzing user preferences, and generating personalized
                career recommendations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 border-2 border-secondary/30">
                <span className="text-secondary font-bold text-lg">API</span>
              </div>
              <h4 className="font-bold mb-2">Integration Layer</h4>
              <p className="text-sm text-muted-foreground">
                Seamless connections to hardware, external services, and document generation systems for comprehensive
                functionality
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 border-2 border-accent/30">
                <span className="text-accent font-bold text-lg">UI</span>
              </div>
              <h4 className="font-bold mb-2">User Interface</h4>
              <p className="text-sm text-muted-foreground">
                Multi-modal interaction through voice commands, web interface, and smart device controls for intuitive
                user experience
              </p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
<div className="mt-12 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
    {[
      { metric: "Offline Mode", value: "100%", description: "Full functionality without internet" },
      { metric: "Compatibility", value: "Cross-platform", description: "Works on all major systems" }
    ].map((item, index) => (
      <div key={index} className="glass p-6 rounded-lg fade-in-up w-56">
        <div className="stat-counter text-2xl font-bold mb-1">{item.value}</div>
        <h4 className="font-semibold mb-1">{item.metric}</h4>
        <p className="text-xs text-muted-foreground">{item.description}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};
