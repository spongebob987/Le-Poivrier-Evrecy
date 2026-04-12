import heroImage from "@/assets/hero-restaurant.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Intérieur chaleureux du restaurant Le Poivrier à Évrecy"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative pepper motif */}
        <div className="flex justify-center mb-6 fade-in">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-accent">
            <path d="M24 4c-2 8-8 14-8 22a8 8 0 0016 0c0-8-6-14-8-22z" fill="currentColor" opacity="0.8"/>
            <path d="M24 2c0 0 1-2 1-2s1 2 1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M20 6c-2-1-4-1-5 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            <path d="M28 6c2-1 4-1 5 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-4 fade-in fade-in-delay-1">
          Le Poivrier
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 font-body tracking-wide mb-2 fade-in fade-in-delay-2">
          Brasserie · Pizzeria
        </p>

        <div className="flex items-center justify-center gap-2 mb-8 fade-in fade-in-delay-2">
          <span className="w-12 h-px bg-accent" />
          <p className="text-sm md:text-base text-accent font-body italic tracking-wider">
            Cuisine maison · Produits frais · Ambiance chaleureuse
          </p>
          <span className="w-12 h-px bg-accent" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in fade-in-delay-3">
          <a
            href="tel:0231731646"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:bg-accent/90 transition-colors text-base"
          >
            <Phone className="w-5 h-5" />
            Réserver une table
          </a>
          <a
            href="#carte"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
          >
            Voir la carte
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in fade-in-delay-4">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
