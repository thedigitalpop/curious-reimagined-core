import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, PenTool, Search, BarChart3 } from "lucide-react";
import growthStrategyImage from "@/assets/growth-strategy.jpg";
import contentCreationImage from "@/assets/content-creation.jpg";
import seoAdvertisingImage from "@/assets/seo-advertising.jpg";
import analyticsReportingImage from "@/assets/analytics-reporting.jpg";

export const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Growth Strategy & Funnel Planning",
      subtitle: "Map out how leads find you, trust you and buy from you.",
      features: [
        "Custom roadmap built to double lead flow",
        "Funnel design that nurtures & converts",
        "Aligns messaging, automation, and offers"
      ],
      image: growthStrategyImage
    },
    {
      icon: <PenTool className="w-12 h-12 text-primary" />,
      title: "Content Creation & Campaigns",
      subtitle: "Turn your ideas into booked clients",
      features: [
        "High-impact emails, posts, and landing pages",
        "AI-assisted writing & scheduling",
        "Designed to drive action and build authority"
      ],
      image: contentCreationImage
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "SEO & Digital Advertising",
      subtitle: "Get found by the right people without wasting ad spend",
      features: [
        "SEO-optimized site + content",
        "AI-enhanced targeting for smarter traffic",
        "Optional paid ads with performance tracking"
      ],
      image: seoAdvertisingImage
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Data Analytics & Reporting",
      subtitle: "See what's working. Fix what's not.",
      features: [
        "Simple, actionable reports",
        "Real-time performance insights",
        "Monthly reviews to keep growth on track"
      ],
      image: analyticsReportingImage
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Offerings
            </h2>
            <p className="text-xl text-muted-foreground">
              Core Solutions. Curious Minds
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300 animate-fade-in group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-hero/20"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-lg font-medium text-muted-foreground">
                    {service.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                  >
                    Start Your Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};