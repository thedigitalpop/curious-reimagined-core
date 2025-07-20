import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Double Your Leads 
            <span className="block text-transparent bg-clip-text bg-gradient-accent">
              Without Spending A Dime On Ads
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in delay-200">
            We build you a fully automated system that books clients, follows up, and 
            nurtures leads 24/7. No marketing team needed. No paid ads required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all shadow-glow text-lg px-8 py-6"
            >
              Claim Your Growth Strategy Here
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-white text-white hover:bg-white hover:text-primary transition-all text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};