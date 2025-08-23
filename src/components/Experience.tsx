import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "Grand Valley State University",
      location: "Michigan, USA",
      period: "2023 - 2024",
      type: "Research",
      description: "Conducted advanced research in data visualization techniques and statistical analysis methodologies. Collaborated with faculty on multiple research projects focusing on surface water analysis and environmental data modeling.",
      achievements: [
        "Led research project on surface water quality analysis using advanced statistical methods",
        "Developed interactive dashboards for environmental data visualization",
        "Co-authored research papers on data visualization best practices",
        "Mentored undergraduate students in statistical analysis techniques"
      ],
      technologies: ["R", "Python", "Tableau", "Statistical Modeling", "GIS"],
      color: "border-l-primary"
    },
    {
      title: "Data Analytics Intern", 
      company: "Regional Healthcare Network",
      location: "Michigan, USA",
      period: "Summer 2023",
      type: "Internship",
      description: "Applied machine learning techniques to healthcare data for predictive analytics and operational optimization. Developed automated reporting systems and data pipelines.",
      achievements: [
        "Built predictive models for patient readmission risk assessment",
        "Created automated reporting system reducing manual work by 60%",
        "Developed data quality assessment framework",
        "Presented findings to executive leadership team"
      ],
      technologies: ["Python", "SQL", "PowerBI", "Scikit-learn", "Pandas"],
      color: "border-l-accent"
    },
    {
      title: "Statistical Analyst",
      company: "Market Research Firm",
      location: "Remote",
      period: "2022 - 2023",
      type: "Part-time",
      description: "Performed statistical analysis on market research data, developed surveys, and created comprehensive reports for client decision-making.",
      achievements: [
        "Analyzed consumer behavior data for Fortune 500 clients",
        "Designed and implemented A/B testing frameworks",
        "Created statistical models for market segmentation",
        "Improved survey response rates by 35% through optimization"
      ],
      technologies: ["SPSS", "R", "Excel", "Survey Design", "A/B Testing"],
      color: "border-l-success"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science & Analytics",
      institution: "Grand Valley State University",
      location: "Michigan, USA",
      period: "2022 - 2024",
      gpa: "3.89/4.0",
      honors: "Dean's List",
      coursework: [
        "Machine Learning", "Statistical Modeling", "Data Mining", 
        "Database Systems", "Data Visualization", "Research Methods"
      ]
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Previous University",
      location: "India",
      period: "2018 - 2022",
      gpa: "3.7/4.0",
      honors: "Magna Cum Laude",
      coursework: [
        "Calculus", "Linear Algebra", "Statistics", 
        "Probability Theory", "Mathematical Modeling", "Operations Research"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and academic foundation in data science
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-playfair font-semibold mb-6 animate-fade-in">
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`shadow-card hover:shadow-hover transition-all duration-300 border-l-4 ${exp.color} animate-slide-in-right`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h4>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Sidebar */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold mb-6 animate-fade-in">
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">GPA:</span>
                      <span className="text-sm text-foreground">{edu.gpa}</span>
                    </div>
                    <Badge variant="secondary" className="w-full justify-center">
                      {edu.honors}
                    </Badge>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold mb-2">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-1">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};