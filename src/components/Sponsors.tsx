import React from 'react';
import { Building, Sparkles } from 'lucide-react';

export default function Sponsors() {
  const sponsors = {
    platinum: [
      { name: "TechCorp", logo: "TC" },
      { name: "InnovateLab", logo: "IL" }
    ],
    gold: [
      { name: "CodeMaster", logo: "CM" },
      { name: "DevStudio", logo: "DS" },
      { name: "TechHub", logo: "TH" }
    ],
    silver: [
      { name: "StartupXYZ", logo: "SX" },
      { name: "CloudNine", logo: "CN" },
      { name: "WebForge", logo: "WF" },
      { name: "DataDriven", logo: "DD" }
    ]
  };

  const SponsorCard = ({ sponsor, tier }: { sponsor: any; tier: string }) => {
    const sizeClasses = {
      platinum: "w-32 h-32 text-2xl",
      gold: "w-24 h-24 text-xl",
      silver: "w-20 h-20 text-lg"
    };

    return (
      <div className="group relative">
        <div className={`${sizeClasses[tier as keyof typeof sizeClasses]} bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center font-bold text-gray-700 group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-300 transform group-hover:scale-105 shadow-lg group-hover:shadow-xl`}>
          {sponsor.logo}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <p className="text-center mt-2 text-sm font-medium text-gray-600 group-hover:text-yellow-600 transition-colors">
          {sponsor.name}
        </p>
      </div>
    );
  };

  return (
    <section id="sponsors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-yellow-600">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thanks to our amazing sponsors who make CodeSprint 2025 possible
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center space-x-2">
              <Sparkles className="h-6 w-6 text-yellow-500" />
              <span>Platinum Sponsors</span>
              <Sparkles className="h-6 w-6 text-yellow-500" />
            </h3>
          </div>
          <div className="flex justify-center space-x-8">
            {sponsors.platinum.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="platinum" />
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center space-x-2">
              <Building className="h-5 w-5 text-yellow-500" />
              <span>Gold Sponsors</span>
            </h3>
          </div>
          <div className="flex justify-center space-x-6">
            {sponsors.gold.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="gold" />
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Silver Sponsors</h3>
          </div>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="silver" />
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join us in supporting the next generation of innovators. Sponsorship opportunities 
              are available at various levels with great benefits for your brand.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200">
              Sponsorship Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}