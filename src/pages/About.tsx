import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-cogni-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full gradient-bg opacity-30 blur-3xl -mr-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-8">Our Mission: <br />Restoring Dignity</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Cognivue was founded by a team of neuroscientists and engineers who saw firsthand the challenges faced by families living with dementia. We believe that technology should serve humanity, especially those most vulnerable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why We Do It</h2>
              <p className="text-lg text-slate-600 mb-6">
                Dementia often leads to a loss of independence and a shrinking world. Our goal is to expand that world again. By providing simple, non-intrusive cues, we help people stay in their homes longer and maintain their daily routines with less anxiety.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <Heart className="text-red-500 mb-4" />
                  <h4 className="font-bold">Empathy Driven</h4>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <Users className="text-cogni-blue" />
                  <h4 className="font-bold">Family Focused</h4>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/team/800/600"
                alt="Our Team"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Lightbulb className="text-cogni-violet" />,
                title: "Innovation with Purpose",
                desc: "We don't build tech for tech's sake. Every feature is validated by clinical research."
              },
              {
                icon: <Target className="text-cogni-teal" />,
                title: "Precision Care",
                desc: "Every user is different. Our software adapts to individual cognitive needs."
              },
              {
                icon: <Users className="text-cogni-blue" />,
                title: "Community Support",
                desc: "We work closely with caregivers to ensure our tools support the entire care ecosystem."
              }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-2xl shadow-sm">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
