import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Cpu, Eye, Battery } from 'lucide-react';

export const Product = () => {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6">Cognivue <span className="text-cogni-blue">One</span></h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The first AR wearable designed specifically for cognitive support. Lightweight, intuitive, and life-changing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://picsum.photos/seed/tech/800/800"
                alt="AR Interface"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Advanced Technology, <br />Simple Interface</h2>
              <p className="text-lg text-slate-600">
                We've stripped away the complexity of traditional AR. No menus, no buttons—just the information you need, when you need it.
              </p>
              <ul className="space-y-4">
                {[
                  "Ultra-lightweight frame (only 45g)",
                  "High-contrast OLED display for clear visibility",
                  "12-hour battery life for all-day support",
                  "Privacy-first local processing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle2 className="text-cogni-teal" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-32">
            {[
              { icon: <Cpu />, label: "CogniCore™ Processor" },
              { icon: <Eye />, label: "Retinal Projection" },
              { icon: <Battery />, label: "Fast Charging" },
              { icon: <CheckCircle2 />, label: "Medical Grade" }
            ].map((spec, i) => (
              <div key={i} className="text-center p-8 bg-slate-50 rounded-2xl">
                <div className="flex justify-center mb-4 text-cogni-blue">
                  {spec.icon}
                </div>
                <p className="font-bold">{spec.label}</p>
              </div>
            ))}
          </div>

          {/* Vision Simulation Section */}
          <section className="py-20 bg-slate-900 rounded-[3rem] overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
            </div>
            
            <div className="max-w-5xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Through the Lens</h2>
                <p className="text-blue-200 text-lg">Experience the world with Cognivue's intuitive AR overlays.</p>
              </div>

              <div className="relative group">
                {/* Main Vision Image */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/livingroom/1200/800" 
                    alt="Living Room Vision" 
                    className="w-full h-auto brightness-75"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* AR Overlays */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Navigation Path */}
                    <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 opacity-60" viewBox="0 0 400 200">
                      <motion.path 
                        d="M200,200 Q200,100 250,50" 
                        fill="none" 
                        stroke="#00f2fe" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.circle 
                        cx="250" cy="50" r="8" 
                        fill="#00f2fe"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </svg>

                    {/* Floating Reminder */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="absolute top-1/4 right-10 glass-morphism p-4 rounded-2xl border-blue-400/30 text-white max-w-[200px]"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-blue-300">Reminder</span>
                      </div>
                      <p className="text-sm font-medium">Time for afternoon tea with Sarah</p>
                    </motion.div>

                    {/* Object Label */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="w-32 h-32 border-2 border-dashed border-teal-400/50 rounded-full flex items-center justify-center">
                        <div className="bg-teal-400/20 backdrop-blur-sm px-3 py-1 rounded-full border border-teal-400/30">
                          <span className="text-white text-[10px] font-bold uppercase tracking-tighter">Favorite Chair</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* HUD Elements */}
                    <div className="absolute bottom-6 left-6 flex items-center space-x-4 text-blue-300/50">
                      <div className="text-[10px] font-mono">SYS_OK</div>
                      <div className="w-12 h-1 bg-blue-300/20 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-blue-400"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                    <h4 className="text-blue-300 font-bold mb-1">Guided Path</h4>
                    <p className="text-slate-400 text-sm">Clear visual markers on the floor lead the way.</p>
                  </div>
                  <div className="p-4">
                    <h4 className="text-blue-300 font-bold mb-1">Smart Labels</h4>
                    <p className="text-slate-400 text-sm">Recognizes familiar objects and people instantly.</p>
                  </div>
                  <div className="p-4">
                    <h4 className="text-blue-300 font-bold mb-1">Active HUD</h4>
                    <p className="text-slate-400 text-sm">Critical info stays in the periphery, never blocking view.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
