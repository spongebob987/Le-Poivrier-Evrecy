import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Nous trouver
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-body font-semibold text-foreground">Adresse</p>
                <p className="text-muted-foreground font-body text-sm">12 Place du Général de Gaulle, 14210 Évrecy</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-body font-semibold text-foreground">Téléphone</p>
                <a href="tel:0231731646" className="text-primary font-body text-sm hover:underline">02 31 73 16 46</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-body font-semibold text-foreground">Horaires <span className="text-xs text-muted-foreground">(à confirmer)</span></p>
                <p className="text-muted-foreground font-body text-sm">Mardi – Samedi : 12h–14h / 19h–22h</p>
                <p className="text-muted-foreground font-body text-sm">Fermé dimanche et lundi</p>
              </div>
            </div>

            <a
              href="tel:0231731646"
              className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:bg-accent/90 transition-colors text-lg mt-4"
            >
              <Phone className="w-5 h-5" />
              Réserver : 02 31 73 16 46
            </a>
            <p className="text-center text-sm text-muted-foreground font-body">
              Réservation fortement conseillée · Ouvert midi et soir
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-border min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307.2!2d-0.5003!3d49.1003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a43e9ed3c7c3f%3A0x8e2c5f3b1a0d4e7f!2sLe%20Poivrier!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Le Poivrier - Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
