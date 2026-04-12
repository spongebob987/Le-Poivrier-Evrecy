import { Star } from "lucide-react";

const stats = [
  { value: "4.6/5", label: "Google", icon: <Star className="w-5 h-5 text-accent fill-accent" /> },
  { value: "527", label: "avis clients" },
  { value: "20–30€", label: "par personne" },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Une adresse incontournable à Évrecy
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Au cœur de la Normandie, Le Poivrier est bien plus qu'un restaurant — c'est un lieu de vie où
            chaque assiette raconte une histoire. Notre cuisine est entièrement faite maison, à partir de
            produits frais soigneusement sélectionnés.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Des portions généreuses, un rapport qualité-prix imbattable, et une équipe passionnée dirigée par
            Ludo : voilà la recette qui fidélise nos clients depuis des années. Que vous veniez pour nos
            pizzas artisanales, nos viandes grillées ou nos desserts gourmands, vous repartez toujours le
            sourire aux lèvres.
          </p>
          <span className="inline-block px-4 py-2 bg-accent/15 text-accent-foreground font-body text-sm font-medium rounded-full border border-accent/30">
            ✦ Réservation recommandée
          </span>
        </div>

        <div className="grid gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-5 bg-secondary rounded-lg border border-border"
            >
              {stat.icon && stat.icon}
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
