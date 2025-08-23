import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:text-primary"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mannemm@mail.gvsu.edu",
      color: "hover:text-accent"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-playfair font-bold gradient-text hover:scale-105 transition-transform duration-200 mb-4"
            >
              Mallikarjuna Mannem
            </button>
            <p className="text-muted-foreground mb-4 max-w-md">
              Data Science & Analytics Graduate passionate about transforming complex data 
              into actionable insights through machine learning and statistical analysis.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`${social.color} transition-all duration-200 hover:scale-110`}
                  onClick={() => window.open(social.url, "_blank")}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start p-0 h-auto font-normal text-muted-foreground hover:text-primary"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Michigan, United States</p>
              <Button
                variant="ghost"
                className="w-full justify-start p-0 h-auto font-normal text-muted-foreground hover:text-primary"
                onClick={() => window.location.href = "mailto:mannemm@mail.gvsu.edu"}
              >
                mannemm@mail.gvsu.edu
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start p-0 h-auto font-normal text-muted-foreground hover:text-primary"
                onClick={() => scrollToSection("#contact")}
              >
                Send a message
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mallikarjuna Mannem. All rights reserved.
          </p>
          <div className="flex items-center text-muted-foreground text-sm mt-4 md:mt-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};