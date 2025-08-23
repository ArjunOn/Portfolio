import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden particles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-hero shadow-hover animate-glow"></div>
            <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
              <span className="text-4xl font-playfair font-bold gradient-text">MM</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            <span className="block text-foreground">Mallikarjuna</span>
            <span className="block gradient-text">Mannem</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            Data Science & Analytics Graduate
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.4s"}}>
            Transforming complex data into actionable insights through machine learning, statistical analysis, and interactive visualizations
          </p>

          {/* Location */}
          <div className="flex items-center justify-center mb-8 text-muted-foreground animate-fade-in" style={{animationDelay: "0.6s"}}>
            <MapPin className="w-4 h-4 mr-2" />
            <span>Grand Valley State University, Michigan</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{animationDelay: "0.8s"}}>
            <Button 
              variant="primary" 
              size="lg"
              className="group"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{animationDelay: "1s"}}>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary hover:scale-110 transition-all duration-200"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary hover:scale-110 transition-all duration-200"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary hover:scale-110 transition-all duration-200"
              onClick={() => window.location.href = "mailto:mannemm@mail.gvsu.edu"}
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <Button
            variant="ghost"
            className="animate-bounce-gentle hover:text-primary transition-colors duration-200"
            onClick={scrollToNext}
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>
    </section>
  );
};