import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    "Recent M.S. in Data Science & Analytics Graduate",
    "3.89/4.0 GPA - Dean's List Achievement",
    "Expertise in Machine Learning & Statistical Analysis",
    "Published Research in Data Visualization",
    "Proficient in Python, R, SQL, and Tableau"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8">
            About <span className="gradient-text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate data scientist with a strong foundation in 
            <span className="text-primary font-semibold"> analytics</span>, 
            <span className="text-accent font-semibold"> machine learning</span>, 
            and <span className="text-success font-semibold">research methodologies</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a recent graduate with a Master's in Data Science & Analytics from Grand Valley State University, 
              I combine strong technical skills with analytical thinking to solve complex problems. My academic 
              journey has been marked by excellence, earning a place on the Dean's List and maintaining a 3.89 GPA.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across machine learning, statistical analysis, and data visualization, 
              with hands-on experience in Python, R, SQL, and modern visualization tools. I'm particularly 
              passionate about transforming raw data into actionable insights that drive decision-making.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats & Info Cards */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="card-hover shadow-card bg-gradient-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-primary p-3 rounded-full mr-4 animate-pulse-glow">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold gradient-text">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">M.S. Data Science & Analytics</h4>
                    <p className="text-muted-foreground">Grand Valley State University</p>
                    <p className="text-sm text-muted-foreground">GPA: 3.89/4.0 • Dean's List</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover shadow-accent bg-gradient-card border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-accent p-3 rounded-full mr-4 animate-pulse-glow">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold gradient-text-accent">Achievements</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">Dean's List</Badge>
                  <Badge variant="secondary" className="mr-2">3.89 GPA</Badge>
                  <Badge variant="secondary" className="mr-2">Research Publications</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover shadow-success bg-gradient-card border-success/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-warm p-3 rounded-full mr-4 animate-pulse-glow">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold gradient-text-warm">Focus Areas</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Statistical Analysis</Badge>
                  <Badge variant="outline">Data Visualization</Badge>
                  <Badge variant="outline">Predictive Modeling</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};