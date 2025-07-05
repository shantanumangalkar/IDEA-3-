import React, { useState, useEffect } from 'react';
import { Clock, Users, Code, Zap, FileText, Award, Building } from 'lucide-react';

export default function About() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, value: "1-4", label: "Team Size" },
    { icon: Clock, value: "₹300", label: "Registration Fee" },
    { icon: FileText, value: "A3", label: "Poster Format" },
    { icon: Award, value: "₹50K", label: "Prize Pool Upto 50k" }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-yellow-400 font-semibold text-lg tracking-wide uppercase">About the Competition</span>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Idea³</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                Idea³ (Innovate. Design. Explain in A3) is the CII Student Innovation Challenge 
                organized by St Vincent Pallotti College of Engineering and Technology in association 
                with the Confederation of Indian Industry (CII).
              </p>
              <p className="text-gray-300">
                This prestigious competition challenges teams to develop innovative solutions for 
                real-world industry problems from leading companies like HCL Technologies, TCS, 
                Trust systems and software and other industry partners. Teams submit comprehensive A3 posters and proposal to compete for ₹50,000 in prizes.
              </p>
            </div>

            {/* Organization Info */}
            <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-yellow-400/20">
              <div className="flex items-center space-x-4 mb-4">
                <Building className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-white font-bold text-lg">Organized by</h3>
                  <p className="text-gray-300">St Vincent Pallotti College of Engineering & Technology</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Code className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-white font-bold text-lg">In Association with</h3>
                  <p className="text-gray-300">Confederation of Indian Industry (CII)</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Countdown */}
          <div className="space-y-8">
            {/* Countdown Timer */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-6 text-center">Registration Deadline</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(timeLeft).map(([unit, value], index) => (
                  <div key={unit} className="text-center group">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-4 mb-3 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <div className="text-4xl font-black text-black">{value.toString().padStart(2, '0')}</div>
                    </div>
                    <div className="text-gray-400 text-sm font-semibold uppercase tracking-wide">
                      {unit}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-300 mt-4 text-sm">Until July 12, 2025</p>
            </div>

            {/* Competition Highlights */}
            <div className="space-y-4">
              {[
                { title: "Industry Problems", desc: "Real challenges from HCL, TCS, Trust & more" },
                { title: "A3 Poster and Proposal Required", desc: "Comprehensive solution presentation" },
                { title: "Functional Prototype", desc: "Working demonstration needed" },
                // { title: "CII Recognition", desc: "Industry-backed certification" }
              ].map((highlight, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h4 className="text-white font-semibold">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}