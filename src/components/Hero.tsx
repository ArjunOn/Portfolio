import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero particles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 relative float">
            <div className="w-full h-full rounded-full bg-gradient-accent shadow-glow animate-pulse-glow"></div>
            <div className="absolute inset-3 rounded-full glass flex items-center justify-center backdrop-blur-md">
              <span className="text-5xl font-playfair font-bold text-white drop-shadow-lg">MM</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-warm rounded-full animate-bounce-gentle"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-cool rounded-full animate-bounce-gentle" style={{animationDelay: "1s"}}></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 animate-slide-in-up">
            <span className="block text-white drop-shadow-lg">Mallikarjuna</span>
            <span className="block gradient-text-accent text-6xl md:text-7xl animate-glow">Mannem</span>
          </h1>

          {/* Tagline */}
          <div className="glass-dark rounded-2xl p-6 mb-8 max-w-4xl mx-auto animate-scale-in" style={{animationDelay: "0.3s"}}>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
              <span className="gradient-text-warm">Data Science</span> & <span className="gradient-text-accent">Analytics Graduate</span>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Transforming complex data into <span className="text-accent font-semibold">actionable insights</span> through 
              <span className="text-success font-semibold"> machine learning</span>, 
              <span className="text-warning font-semibold"> statistical analysis</span>, and 
              <span className="text-primary font-semibold"> interactive visualizations</span>
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center mb-8 text-white/80 animate-slide-in-left" style={{animationDelay: "0.5s"}}>
            <div className="glass rounded-full px-4 py-2 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-accent animate-pulse-glow" />
              <span className="font-medium">Grand Valley State University, Michigan</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-float-up" style={{animationDelay: "0.7s"}}>
            <Button 
              variant="primary" 
              size="lg"
              className="group bg-gradient-accent hover:bg-gradient-warm transition-all duration-500 transform hover:scale-110 hover:shadow-accent px-8 py-4"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-6 h-6 mr-3 group-hover:animate-wiggle" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 transition-all duration-500 transform hover:scale-110"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16 animate-slide-in-up" style={{animationDelay: "0.9s"}}>
            <Button
              variant="ghost"
              size="lg"
              className="glass rounded-full p-4 text-white hover:bg-gradient-cool transition-all duration-500 transform hover:scale-125 icon-bounce"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="w-7 h-7" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="glass rounded-full p-4 text-white hover:bg-gradient-accent transition-all duration-500 transform hover:scale-125 icon-bounce"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="w-7 h-7" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="glass rounded-full p-4 text-white hover:bg-gradient-warm transition-all duration-500 transform hover:scale-125 icon-bounce"
              onClick={() => window.location.href = "mailto:mannemm@mail.gvsu.edu"}
            >
              <Mail className="w-7 h-7" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <Button
            variant="ghost"
            className="glass rounded-full p-3 text-white animate-bounce-gentle hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            onClick={scrollToNext}
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/6 left-1/6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float float"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-success/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/6 right-1/6 w-36 h-36 bg-warning/15 rounded-full blur-3xl animate-float float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-glow"></div>
      </div>
    </section>
  );
};