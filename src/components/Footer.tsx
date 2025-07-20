import { Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CuriousCoreAI</h3>
              <p className="text-secondary-foreground/80 mb-4">
                Empowering small businesses with AI-driven marketing solutions that deliver real results.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/curiouscore.joe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.youtube.com/@CuriousCoreJoe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-secondary-foreground/80">
                <p>joe@curiouscoreai.app</p>
                <p>+1 844-410-4198</p>
                <p>1999 Futurity Dr<br />Sunland Park, NM 88063</p>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center">
            <p className="text-secondary-foreground/60">
              © 2024 CuriousCoreAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};