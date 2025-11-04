function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-dark)] text-white py-8" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                <div className="icon-utensils text-xl text-white"></div>
              </div>
              <span className="text-xl font-bold">Crust@Crave</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://facebook.com" target="_blank" className="hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-facebook text-xl"></div>
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-instagram text-xl"></div>
              </a>
              <a href="https://tiktok.com" target="_blank" className="hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-move text-xl"></div>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-600">
            <p>&copy; 2025 Crust&Crave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}