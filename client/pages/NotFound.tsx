import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center transition-colors duration-300">
      <div className="text-center px-6 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-black text-accent mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
          Page Not Found
        </h2>
        <p className="text-base md:text-xl text-muted-foreground opacity-90 mb-8 max-w-md font-bold">
          The page you're looking for doesn't exist or is still under
          development.
        </p>
        <Link
          to="/"
          className="bg-accent text-accent-foreground px-8 md:px-12 py-4 md:py-5 font-black text-base md:text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
