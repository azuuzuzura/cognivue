import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Cognivue One - Classic",
    price: "$499",
    image: "https://picsum.photos/seed/glasses1/600/600",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Cognivue One - Pro",
    price: "$649",
    image: "https://picsum.photos/seed/glasses2/600/600",
    tag: "Enhanced Battery"
  },
  {
    id: 3,
    name: "Cognivue One - Lite",
    price: "$349",
    image: "https://picsum.photos/seed/glasses3/600/600",
    tag: "Minimalist"
  }
];

export const Shop = () => {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">The Cognivue Collection</h1>
              <p className="text-slate-600">Choose the right level of support for your loved one.</p>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-4">
              <div className="flex items-center text-sm text-slate-500">
                <ShieldCheck className="mr-2 text-cogni-teal" size={18} />
                2-Year Warranty
              </div>
              <div className="flex items-center text-sm text-slate-500">
                <Truck className="mr-2 text-cogni-blue" size={18} />
                Free Shipping
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cogni-blue">
                    {product.tag}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 text-slate-600 text-sm">4.9</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-cogni-blue mb-6">{product.price}</p>
                  <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-cogni-blue transition-colors">
                    <ShoppingBag className="mr-2" size={20} /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Not sure which one to choose?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our specialists are here to help you find the perfect fit for your family's needs.
          </p>
          <button className="bg-white border-2 border-slate-200 px-10 py-4 rounded-full font-bold hover:border-cogni-blue transition-all">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
