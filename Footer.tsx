import React from 'react';
import { Brain, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white mb-6">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Brain size={20} />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">cognivue</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering individuals with dementia through innovative augmented reality solutions. Restoring independence, one cue at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/product" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop Collection</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Clinical Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Features</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated on our latest research and product releases.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-slate-800 border-none rounded-l-xl px-4 py-3 text-sm w-full focus:ring-2 focus:ring-cogni-blue"
              />
              <button className="bg-cogni-blue text-white px-4 py-3 rounded-r-xl hover:bg-blue-700 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 Cognivue Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
