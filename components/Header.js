function Header() {
  // Get the current page name
  const currentPage = window.location.pathname.split("/").pop();

  const navItems = [
    { name: "Home", link: "index.html" },
    { name: "About", link: "about.html" },
    { name: "Products", link: "products.html" },
    { name: "Gallery", link: "gallery.html" },
    { name: "Contact", link: "contact.html" },
  
  ];

  return (
    <header className="bg-grasot-to-r from-amber-400 to-darkyellow-500 shadow-md py-4">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-6">
        {/* Logo and title */}
        <div className="flex items-center space-x-3">
          <img src="mypie.png" alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
          <h1 className="text-3xl font-bold text-black">Crust & Crave</h1>
        </div>

        {/* Navigation links */}
        <ul className="flex flex-wrap gap-4 text-lg font-semibold">
          {navItems.map((item) => {
            const isActive = currentPage === item.link;
            return (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`px-4 py-2 rounded-full shadow-md transition-all duration-300 ${
                    isActive
                      ? "bg-amber-600 text-white transform -translate-y-1 shadow-lg"
                      : "bg-amber-500 text-white hover:bg-amber-600 hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
