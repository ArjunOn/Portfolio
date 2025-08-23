import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain,
  Cpu,
  PieChart,
  TrendingUp,
  GitBranch
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "Python", level: 90, description: "Pandas, NumPy, Scikit-learn, TensorFlow" },
        { name: "R", level: 85, description: "Tidyverse, ggplot2, Shiny, Statistical Modeling" },
        { name: "SQL", level: 80, description: "MySQL, PostgreSQL, Query Optimization" },
        { name: "JavaScript", level: 70, description: "D3.js, React, Node.js" }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "text-accent",
      skills: [
        { name: "Supervised Learning", level: 90, description: "Regression, Classification, Ensemble Methods" },
        { name: "Unsupervised Learning", level: 85, description: "Clustering, Dimensionality Reduction" },
        { name: "Deep Learning", level: 75, description: "Neural Networks, CNNs, RNNs" },
        { name: "NLP", level: 70, description: "Text Mining, Sentiment Analysis" }
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "text-success",
      skills: [
        { name: "Tableau", level: 90, description: "Dashboard Creation, Advanced Analytics" },
        { name: "PowerBI", level: 80, description: "Interactive Reports, DAX Functions" },
        { name: "ggplot2", level: 85, description: "Statistical Graphics in R" },
        { name: "Plotly", level: 75, description: "Interactive Visualizations" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Cpu,
      color: "text-secondary-foreground",
      skills: [
        { name: "Git/GitHub", level: 85, description: "Version Control, Collaboration" },
        { name: "Docker", level: 70, description: "Containerization, Deployment" },
        { name: "AWS", level: 65, description: "Cloud Computing, S3, EC2" },
        { name: "Jupyter", level: 90, description: "Notebook Development, Analysis" }
      ]
    }
  ];

  const certifications = [
    "Google Data Analytics Certificate",
    "IBM Data Science Professional Certificate",
    "Microsoft Azure Fundamentals",
    "Tableau Desktop Specialist"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical proficiency across the full data science pipeline
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                  <h3 className="text-xl font-playfair font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-warning mr-3" />
              <h3 className="text-xl font-playfair font-semibold">Certifications & Training</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 justify-start"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};