import React from 'react';

export default function Partners() {
  const partners = [
    { name: "Brave", logo: "/logos/brave.png" },
    { name: "hcl", logo: "/logos/hcl.jpg" },
    { name: "trust", logo: "/logos/trust.png" }
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 font-semibold text-lg tracking-wide uppercase">Trusted By</span>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Partners</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Collaborating with industry leaders to bring you the best hackathon experience
          </p>
        </div>

        <div className="flex justify-center gap-20 items-center flex-wrap">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 object-contain hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
