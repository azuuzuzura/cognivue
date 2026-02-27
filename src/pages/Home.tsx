import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Navigation, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                Clearer Vision for <br />
                <span className="gradient-text">Brighter Memories</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg">
                Cognivue AR glasses provide gentle guidance and reminders, helping individuals with dementia navigate their world with confidence and independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop" className="bg-cogni-blue text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl hover:scale-105">
                  Shop Cognivue One <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/product" className="bg-white text-cogni-blue border-2 border-cogni-blue px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-blue-50 transition-all">
                  Learn How It Works
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 gradient-bg blur-3xl opacity-20 rounded-full"></div>
              <img
                src="https://picsum.photos/seed/cognivue-ar/800/600"
                alt="Cognivue AR Glasses"
                className="relative z-10 rounded-3xl shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Empowering Independence</h2>
          <p className="text-xl text-slate-600">Simple cues that make a world of difference.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Navigation className="text-cogni-blue" size={32} />,
              title: "Smart Navigation",
              desc: "Visual paths projected directly onto the floor to guide users to their destination safely."
            },
            {
              icon: <Bell className="text-cogni-violet" size={32} />,
              title: "Contextual Reminders",
              desc: "Gentle overlays for medication, appointments, and daily tasks exactly when they're needed."
            },
            {
              icon: <Shield className="text-cogni-teal" size={32} />,
              title: "Safety First",
              desc: "Real-time hazard detection and emergency contact integration for peace of mind."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
