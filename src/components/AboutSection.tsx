import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Zap, Users } from "lucide-react";

export const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Targeted Solutions",
      description: "Custom strategies built specifically for your business goals and target audience."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge AI to automate your marketing and lead generation processes."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "24/7 Lead Nurturing",
      description: "Never miss an opportunity with our round-the-clock automated follow-up systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              We help ambitious small business owners break free from outdated marketing.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              If you're tired of chasing leads, burning money on ads, or juggling too many tools, we've got your back. 
              Our all-in-one AI system handles everything—so you can focus on your clients, not your calendar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 animate-fade-in">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-glow"
            >
              Request a Consultation Now!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};