import { Mail, Github, Linkedin, Heart, Trophy, Calendar, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our team for demos, collaborations, or project inquiries
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div className="feature-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Smart India Hackathon 2025</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <span>Submission Period: January 2025</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>Problem Statement: AI-powered Career Guidance</span>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">For Judges & Evaluators</h3>
              <p className="text-muted-foreground mb-6">
                We welcome demonstrations, technical discussions, and detailed project walkthroughs. 
                Our team is available for live demos and Q&A sessions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-muted-foreground">thotakurahardik@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-muted-foreground">github.com/jarvis-career-assistant</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-3 text-primary" />
                  <span className="text-muted-foreground">linkedin.com/in/hardik-thotakura-103338323</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Request Form */}
          <div className="fade-in-up">
            <div className="feature-card">
              <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name / Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name or organization"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Demo Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                    <option>Live Voice Assistant Demo</option>
                    <option>Smart Home Integration</option>
                    <option>PDF Generation Showcase</option>
                    <option>Complete System Walkthrough</option>
                    <option>Technical Architecture Review</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Let us know what specific aspects you'd like to see demonstrated..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-hero w-full">
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>
        </div>

        

        {/* Footer Credits */}
        <div className="text-center mt-12 fade-in-up">
          <div className="glass p-6 rounded-lg inline-block">
            <p className="text-muted-foreground">
              🚀 <strong>Jarvis Assistant with Career Guidance Prototype</strong> 🚀
              <br />
              <span className="text-sm">
                Empowering the next generation of learners through AI-driven career discovery
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};