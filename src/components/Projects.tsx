import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, TrendingUp, Shield, Droplets } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Gun Violence Analysis Dashboard",
      description: "Comprehensive analysis of gun violence trends across the United States using machine learning and statistical modeling. Built interactive dashboards for policy makers and researchers.",
      longDescription: "This project analyzes patterns in gun violence incidents across the US, identifying key factors and trends. Using advanced statistical methods and machine learning algorithms, the dashboard provides actionable insights for policy development.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "Statistical Analysis", "Time Series"],
      features: [
        "Interactive state-by-state visualization",
        "Predictive modeling for incident forecasting",
        "Statistical trend analysis over 5+ years",
        "Policy impact assessment tools"
      ],
      metrics: {
        "Data Points": "500K+",
        "Accuracy": "87%",
        "Time Period": "2018-2023"
      },
      github: "https://github.com",
      demo: "https://tableau.com",
      category: "Data Analysis",
      color: "border-l-destructive"
    },
    {
      title: "Cryptocurrency Market Analysis",
      description: "Advanced predictive modeling system for cryptocurrency price movements using deep learning and sentiment analysis. Combines technical indicators with social media sentiment.",
      longDescription: "A comprehensive cryptocurrency analysis platform that leverages multiple data sources including price history, trading volumes, and social media sentiment to predict market movements.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop&crop=center",
      technologies: ["Python", "TensorFlow", "LSTM", "NLP", "API Integration", "Real-time Data"],
      features: [
        "Real-time price prediction models",
        "Sentiment analysis from Twitter/Reddit",
        "Technical indicator integration",
        "Portfolio optimization recommendations"
      ],
      metrics: {
        "Coins Tracked": "50+",
        "Prediction Accuracy": "72%",
        "Data Sources": "5+"
      },
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Machine Learning",
      color: "border-l-warning"
    },
    {
      title: "Surface Water Quality Monitoring",
      description: "Environmental data analysis system for monitoring surface water quality using IoT sensors and predictive analytics. Developed early warning systems for water contamination.",
      longDescription: "A comprehensive environmental monitoring solution that combines IoT sensor data with machine learning to predict and prevent water quality issues before they become critical.",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&crop=center",
      technologies: ["R", "Shiny", "Time Series Analysis", "IoT Data", "GIS", "Environmental Science"],
      features: [
        "Real-time water quality monitoring",
        "Contamination prediction algorithms",
        "Geographic information system integration",
        "Automated alert system for stakeholders"
      ],
      metrics: {
        "Sensors Monitored": "200+",
        "Parameters Tracked": "15+",
        "Accuracy": "91%"
      },
      github: "https://github.com",
      demo: "https://shiny.com",
      category: "Environmental Analytics",
      color: "border-l-success"
    },
    {
      title: "Healthcare Analytics Platform",
      description: "Patient readmission prediction system using electronic health records and machine learning. Helps healthcare providers identify high-risk patients for early intervention.",
      longDescription: "An advanced healthcare analytics platform that processes electronic health records to predict patient readmission risks, enabling proactive care management and resource optimization.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      technologies: ["Python", "SQL", "Random Forest", "Feature Engineering", "HIPAA Compliance", "PowerBI"],
      features: [
        "Patient risk stratification",
        "Predictive readmission modeling",
        "Clinical decision support tools",
        "Resource allocation optimization"
      ],
      metrics: {
        "Patient Records": "100K+",
        "Accuracy": "84%",
        "Risk Reduction": "23%"
      },
      github: "https://github.com",
      demo: "https://powerbi.com",
      category: "Healthcare Analytics",
      color: "border-l-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications of data science solving complex problems across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-hover transition-all duration-300 border-l-4 ${project.color} group animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <project.icon className="w-8 h-8 text-primary bg-background/90 p-1.5 rounded-lg" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Header */}
                  <h3 className="text-xl font-playfair font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/50 rounded-lg">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};