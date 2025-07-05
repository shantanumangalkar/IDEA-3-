import React from 'react';
import { Trophy, Award, Medal, Gift, Star, Crown, FileText, Users } from 'lucide-react';

export default function Prize() {
  const benefits = [
    "Cash Prize",
    "Winner Certificate", 
    "Industry Recognition",
    "CII Certification",
    "Portfolio Enhancement",
    "Academic Credits"
  ];

  return (
    <section id="prize" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 font-semibold text-lg tracking-wide uppercase">Rewards & Recognition</span>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Prize <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Pool</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compete for ₹50,000 in total prizes plus the prestigious Pallottine Consultation Prize
          </p>
        </div>

        {/* Prize Pool Display */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/20 shadow-2xl">
            <Crown className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-6xl font-black text-white mb-4">₹50,000</h3>
            <p className="text-2xl text-yellow-400 font-bold mb-4">Total Prize Pool</p>
            <p className="text-gray-300 max-w-md mx-auto">
              Multiple cash prizes and special recognition awards for outstanding innovation
            </p>
          </div>
        </div>

        {/* Special Awards & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Special Recognition</h3>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-2xl p-6 mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Award className="h-8 w-8 text-purple-400" />
                  <h4 className="text-xl font-bold text-purple-400">Pallottine Consultation Prize</h4>
                </div>
                <p className="text-gray-300">
                  Special award for outstanding real-world impact and innovation that addresses critical industry challenges with practical implementation potential.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "📄", title: "E-Certificates", desc: "All participants receive official CII certificates" },
                { icon: "🍽️", title: "Lunch Included", desc: "Registration fee covers meals for all team members" },
                { icon: "🤝", title: "Industry Connect", desc: "Network with professionals from HCL, TCS & more" },
                { icon: "💼", title: "Portfolio Boost", desc: "Enhance your professional profile with industry recognition" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 shadow-2xl">
              <div className="text-center mb-6">
                <Gift className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Submission Requirements</h3>
                <p className="text-gray-300">What you need to submit for evaluation</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: <FileText className="h-5 w-5" />, title: "A3 Poster and Proposal (PDF)", desc: "Comprehensive solution presentation with methodology" },
                  { icon: <Users className="h-5 w-5" />, title: "Functional Prototype ", desc: "Working demonstration (digital/physical/software)" },
                  { icon: <Trophy className="h-5 w-5" />, title: "Team Registration", desc: "1-4 members per team with designated leader" },
                  { icon: <Award className="h-5 w-5" />, title: "Original Work", desc: "No plagiarism - AI assistance must be declared" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300 p-3 bg-white/5 rounded-lg">
                    <div className="text-yellow-400">{item.icon}</div>
                    <div>
                      <span className="font-semibold text-white">{item.title}</span>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What Every Participant Gains</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-white font-semibold text-sm">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}