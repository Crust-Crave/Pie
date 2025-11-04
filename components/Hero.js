function Hero() {
  try {
    return (
      <section className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] py-20" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-dark)] mb-6">
             Crust&Crave
            </h2>
            <p className="text-xl text-[var(--text-dark)] mb-8 font-semibold">
              "Where Every Bite is Delight"
            </p>
            <button className="btn-primary text-lg">
              View our Products
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}