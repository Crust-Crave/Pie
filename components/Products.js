function Products() {
  try {
    const products = [
      {
        id: 1,
        name: "Jackfruit Macapuno Pie",
        description: "Whole baked Jackfruit Macapuno Pie",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
        price: "₱249.00"
      },
      {
        id: 2,
        name: "Fried Jackfruit Macapuno Pie",
        description: "Crunchy and flaky fried Jackfruit Macapuno Pie",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
        price: "₱39.00"
      }
    ];

    return (
      <section className="py-16" data-name="products" data-file="components/Products.js">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[var(--text-dark)] mb-12">
            Our Featured Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--primary-color)]">{product.price}</span>
                    <button className="btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}