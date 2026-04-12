import { ChefHat, Leaf, Pizza, Heart } from "lucide-react";

const highlights = [
  { icon: ChefHat, title: "Cuisine maison", desc: "Tout est préparé sur place avec passion" },
  { icon: Leaf, title: "Produits frais", desc: "Des ingrédients de qualité, sourcés localement" },
  { icon: Pizza, title: "Pizzas artisanales", desc: "Les meilleures pizzas de la région" },
  { icon: Heart, title: "Accueil chaleureux", desc: "Un service souriant et attentionné" },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Pourquoi nos clients nous adorent
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="text-center p-6 bg-background rounded-lg border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <h.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{h.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
