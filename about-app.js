class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AboutContent() {
  try {
    return (
      <div className="py-16" data-name="about-content" data-file="about-app.js">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold text-center text-[var(--text-dark)] mb-8">About Golden Bites</h1>
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Welcome to Golden Bites, where passion meets quality in every bite. We are dedicated to bringing you the finest food products crafted with care and premium ingredients.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our journey began with a simple mission: to create exceptional food experiences that bring joy to every table. Each product is carefully selected and prepared to meet our high standards of excellence.
            </p>
            <p className="text-lg text-gray-700">
              From our kitchen to your table, we ensure that every item reflects our commitment to quality, taste, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AboutContent component error:', error);
    return null;
  }
}

function AboutApp() {
  try {
    return (
      <div className="min-h-screen">
        <Header />
        <AboutContent />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><AboutApp /></ErrorBoundary>);