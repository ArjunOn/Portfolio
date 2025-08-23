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
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate data scientist with a strong foundation in analytics, machine learning, 
            and research methodologies
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
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-playfair font-semibold">Education</h3>
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

            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-playfair font-semibold">Achievements</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">Dean's List</Badge>
                  <Badge variant="secondary" className="mr-2">3.89 GPA</Badge>
                  <Badge variant="secondary" className="mr-2">Research Publications</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-success mr-3" />
                  <h3 className="text-xl font-playfair font-semibold">Focus Areas</h3>
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