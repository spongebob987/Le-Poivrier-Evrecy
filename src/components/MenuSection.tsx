import foodSalad from "@/assets/food-salad.jpg";
import foodPizza from "@/assets/food-pizza.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import { Phone } from "lucide-react";

const categories = [
  {
    title: "Entrées & Salades",
    desc: "Salade de gésiers, saumon fumé maison, et bien d'autres entrées généreuses qui mettent en appétit.",
    image: foodSalad,
  },
  {
    title: "Plats & Pizzas",
    desc: "Viandes grillées, pot-au-feu de la mer, et nos fameuses pizzas artisanales — copieuses et gourmandes.",
    image: foodPizza,
  },
  {
    title: "Desserts",
    desc: "Des desserts faits maison qui concluent le repas en beauté — fondants, crèmes et gourmandises.",
    image: foodDessert,
  },
];

const MenuSection = () => {
  return (
    <section id="carte" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
          Notre Carte
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Menu du soir à partir de 23€ · Menu déjeuner disponible
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-lg overflow-hidden border border-border bg-background group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:0231731646"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Appelez-nous pour le menu du jour : 02 31 73 16 46
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
