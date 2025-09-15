import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ImpactSection } from "@/components/ImpactSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TimelineSection />
      <ImpactSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default Index;
