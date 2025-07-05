import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, Trophy, ArrowRight, Sparkles, Code2 } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5"></div>
        <div 
          className="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-600 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="inline-flex items-center mt-5 space-x-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-400 px-6 py-3 rounded-full text-sm font-semibold border border-yellow-400/30 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span>Registration Open - ₹300 per team</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Innovate. Design.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse">
                  Explain in A3
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
                  <span className="text-yellow-400">Idea³</span> 2025
                </h2>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Confederation of Indian Industry (CII) Student Innovation Challenge organized by St Vincent Pallotti College. 
                  Submit your A3 poster and prototype to compete for ₹50,000 in prizes.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 flex items-center justify-center space-x-3">
                <span>Register Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center space-x-2">
                  <span>View Problem Statements</span>
                  <div className="w-2 h-2 bg-current rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Calendar, text: "July 19, 2025" },
                { icon: MapPin, text: "Nagpur, India" },
                { icon: Users, text: "1-4 per team" },
                { icon: Trophy, text: "₹50,000 Prize-Pool" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-all duration-300">
                    <item.icon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced 3D Illustration */}
          <div className="relative">
            <div className="relative w-full h-[500px] perspective-1000">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-yellow-400/30 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-yellow-600/10"></div>
                
                {/* Code Animation */}
                <div className="absolute inset-4 bg-black/50 rounded-2xl p-6 font-mono text-green-400 text-sm overflow-hidden">
                  <div className="space-y-2 animate-pulse">
                    <div className="flex space-x-2">
                      <span className="text-yellow-400">const</span>
                      <span className="text-blue-400">competition</span>
                      <span className="text-white">=</span>
                      <span className="text-green-400">'Idea³'</span>
                    </div>
                    <div className="flex space-x-2">
                      <span className="text-yellow-400">let</span>
                      <span className="text-blue-400">teamSize</span>
                      <span className="text-white">=</span>
                      <span className="text-purple-400">1-4</span>
                    </div>
                    <div className="flex space-x-2">
                      <span className="text-yellow-400">function</span>
                      <span className="text-blue-400">Implement</span>
                      <span className="text-white">{'() {'}</span>
                    </div>
                    <div className="pl-4 text-gray-400">// Build the Prototype</div>
                    <div className="text-white">{'}'}</div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center animate-bounce shadow-lg">
                  <Code2 className="h-6 w-6 text-black" />
                </div>
                
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse shadow-lg">
                  <span className="text-white font-bold text-xs">A3</span>
                </div>
                
                <div className="absolute top-1/2 right-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-ping shadow-lg">
                  <span className="text-white font-bold text-xs">₹</span>
                </div>
              </div>

              {/* Background Cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 transform translate-x-4 translate-y-4 -z-10 opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl border border-gray-600 transform translate-x-8 translate-y-8 -z-20 opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}