const FooterSection = () => {
  return (
    <footer className="py-10 px-4 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <h3 className="text-2xl font-heading font-bold">Le Poivrier</h3>
        <p className="font-body text-sm text-primary-foreground/80">
          12 Place du Général de Gaulle, 14210 Évrecy ·{" "}
          <a href="tel:0231731646" className="hover:underline">02 31 73 16 46</a>
        </p>
        <div className="flex justify-center gap-6 text-sm font-body text-primary-foreground/60">
          <a href="#" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
          <a
            href="https://maps.google.com/?q=12+Place+du+Général+de+Gaulle+14210+Évrecy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-foreground transition-colors"
          >
            Google Maps
          </a>
        </div>
        <p className="text-xs text-primary-foreground/40 font-body pt-2">
          © 2025 Le Poivrier · Évrecy, Normandie
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
