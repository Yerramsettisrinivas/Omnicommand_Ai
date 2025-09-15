import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: TrendingUp,
    number: 100,
    suffix: "+",
    label: "Career Paths",
    description: "Comprehensive guidance across diverse industries"
  },
  {
    icon: Clock,
    number: 24,
    suffix: "/7",
    label: "Instant Guidance",
    description: "Available anytime, anywhere - even offline"
  },
  {
    icon: CheckCircle,
    number: 95,
    suffix: "%",
    label: "Accuracy Rate",
    description: "Precise career matching based on AI analysis"
  },
  {
    icon: Users,
    number: 1000,
    suffix: "+",
    label: "Students Helped",
    description: "Making career decisions easier for everyone"
  }
];

const AnimatedCounter = ({ number, suffix = "", duration = 2000 }: { 
  number: number; 
  suffix?: string; 
  duration?: number; 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startCount = 0;
    const endCount = number;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(startCount + (endCount - startCount) * progress);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [number, duration]);

  return <span>{count}{suffix}</span>;
};

export const ImpactSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Project Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming how students discover and pursue their dream careers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div key={index} className="feature-card text-center fade-in-up">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="stat-counter mb-2">
                  <AnimatedCounter number={stat.number} suffix={stat.suffix} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Impact Areas */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Students */}
          <div className="feature-card fade-in-up">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-4">For Students</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Personalized career roadmaps with clear action steps</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>24/7 AI mentor for instant guidance and support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Skill gap analysis and learning recommendations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Industry insights and market trend analysis</span>
              </li>
            </ul>
          </div>

          {/* Educational Institutions */}
          <div className="feature-card fade-in-up">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🏫</span>
            </div>
            <h3 className="text-xl font-bold mb-4">For Colleges</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Scalable career counseling solution</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Data-driven insights on student career preferences</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Reduced counselor workload through automation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Improved student satisfaction and outcomes</span>
              </li>
            </ul>
          </div>

          {/* Society */}
          <div className="feature-card fade-in-up">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-bold mb-4">For Society</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Better workforce alignment with industry needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Reduced unemployment through better career matching</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Democratized access to quality career guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5" />
                <span>Economic growth through skilled workforce development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="feature-card inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Career Guidance?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Join us in revolutionizing how students discover their career paths with AI-powered assistance.
            </p>
            <button className="btn-hero">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};