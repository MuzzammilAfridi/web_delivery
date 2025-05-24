
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll events to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            WebApp<span className="text-blue-600">Delivery</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
            <Link to="/service" className="hover:text-blue-600 transition-colors font-medium">Services</Link>
            <Link to="process" className="hover:text-blue-600 transition-colors font-medium">Process</Link>
            <Link to="/teammates" className="hover:text-blue-600 transition-colors font-medium">Team</Link>
            <Link to="/testimonials" className="hover:text-blue-600 transition-colors font-medium">Testimonials</Link>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
          <div className="flex flex-col space-y-4 pb-4">
            <a href="#" className="hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Home</a>
            <a href="#services" className="hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Services</a>
            <a href="#process" className="hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Process</a>
            <a href="#team" className="hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Team</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors font-medium" onClick={toggleMenu}>Testimonials</a>
            <Button asChild className="w-full">
              <a href="#contact" onClick={toggleMenu}>Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
