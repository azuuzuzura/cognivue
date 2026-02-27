import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ShoppingCart, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
  { name: 'About Us', path: '/about' },
  { name: 'Shop', path: '/shop' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 gradient-bg rounded-lg opacity-20 animate-pulse"></div>
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-cogni-blue" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,2C8.13,2,5,5.13,5,9c0,2.38,1.19,4.47,3,5.74V17c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2.26c1.81-1.27,3-3.36,3-5.74 C19,5.13,15.87,2,12,2z M15,16H9v-1h6V16z M15.12,13.12L14.41,13.83L13,12.41V15h-2v-2.59l-1.41,1.41l-0.71-0.71L12,10.12 L15.12,13.12z" />
                <circle cx="12" cy="9" r="1" fill="white" />
                <circle cx="9" cy="7" r="1" fill="white" />
                <circle cx="15" cy="7" r="1" fill="white" />
                <circle cx="9" cy="11" r="1" fill="white" />
                <circle cx="15" cy="11" r="1" fill="white" />
              </svg>
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-cogni-blue">
              cognivue
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cogni-blue",
                  location.pathname === item.path ? "text-cogni-blue" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/shop"
              className="p-2 text-slate-600 hover:text-cogni-blue transition-colors"
            >
              <ShoppingCart size={20} />
            </Link>
            <button className="bg-cogni-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-cogni-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-medium",
                location.pathname === item.path ? "text-cogni-blue" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full bg-cogni-blue text-white px-6 py-3 rounded-xl font-medium">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};
