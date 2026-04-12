import { Star } from "lucide-react";

const reviews = [
  { name: "Vanessa", text: "Super resto, très bien manger, très bon accueil, cadre sympa." },
  { name: "Nicolas Marie", text: "Sandrine et Gaetan sont des serveurs vraiment géniaux... Des plats copieux et goulayants" },
  { name: "Delphine Lemoigne", text: "Toujours un réel plaisir de venir passer un moment au Poivrier... fidèles depuis des années et jamais déçus !" },
  { name: "Jean-Luc Dhoyer", text: "Une équipe formidable dirigée par Ludo un patron dynamique et qui connaît son boulot." },
  { name: "Julie Bisson", text: "Menu très bon rapport qualité prix, très bon vin, accueil poli et souriant." },
  { name: "Car La", text: "Je n'ai jamais mangé une pizza aussi bonne de ma vie !" },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Ce que disent nos clients
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="p-6 bg-background rounded-lg border border-border">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-body font-semibold text-foreground text-sm">{review.name}</p>
                <span className="text-xs text-muted-foreground font-body px-2 py-1 bg-secondary rounded">Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
