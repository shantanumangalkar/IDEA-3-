import React from 'react';
import { Brain, Globe, Heart, Shield, ArrowRight, Building, Cpu, Database, Bot } from 'lucide-react';

export default function Themes() {
  const companies = [
    {
      name: "HCL Technologies",
      logo: "HCL",
      problems: [
        {
          title: "Business Continuity & Disaster Recovery AI Agent",
          description: "Build an AI agent that predicts IT failures by analyzing historical data patterns, initiates BCP protocols, and triggers disaster recovery alarms across global regions.",
          icon: <Shield className="h-6 w-6" />,
          gradient: "from-blue-500 to-purple-600"
        },
        {
          title: "Human Resource Screening AI Agent", 
          description: "Develop a virtual HR manager agent for first-level candidate screening, including resume analysis, candidate identification, and automated initial interviews.",
          icon: <Brain className="h-6 w-6" />,
          gradient: "from-green-500 to-emerald-600"
        },
        {
          title: "Supply Chain AI Agent",
          description: "Create an AI agent for comprehensive supply chain management including inventory, warehousing, order processing, payments, and logistics for manufacturing industries.",
          icon: <Database className="h-6 w-6" />,
          gradient: "from-orange-500 to-red-600"
        },
        {
          title: "Agentic AI for Single-Man Clinics",
          description: "Build comprehensive AI system for private practitioners including patient registration, communication agents, EHR management, and payment processing.",
          icon: <Heart className="h-6 w-6" />,
          gradient: "from-emerald-500 to-teal-600"
        }
      ]
    },
    {
      name: "TCS",
      logo: "TCS",
      problems: [
        {
          title: "Product Recommendation AI Agent",
          description: "Build an AI agent that recommends products to customers based on browsing and purchasing history using appropriate LLM or SLM technologies.",
          icon: <Bot className="h-6 w-6" />,
          gradient: "from-purple-500 to-pink-600"
        },
        {
          title: "Travel Itinerary Planning AI Agent",
          description: "Develop an AI agent that creates personalized travel itineraries based on customer travel dates and destinations using small language models.",
          icon: <Globe className="h-6 w-6" />,
          gradient: "from-cyan-500 to-blue-600"
        },
        {
          title: "Health & Wellness Coach AI Agent",
          description: "Create an AI agent providing personalized health and wellness advice based on fitness goals and health data using small language model analysis.",
          icon: <Heart className="h-6 w-6" />,
          gradient: "from-red-500 to-pink-600"
        },
        {
          title: "Radiology AI System",
          description: "Develop agentic AI system for processing radiology images and automated disease identification with high accuracy diagnostic capabilities.",
          icon: <Cpu className="h-6 w-6" />,
          gradient: "from-blue-500 to-indigo-600"
        }

        
      ]
    },
    {
      name: "Trust Systems and Software",
      logo: "Trust",
      problems: [
        {
          title: "Credit Decision Engine",
          description: "Develop AI systems for pre-disbursement and post-disbursement credit decision making with advanced risk assessment capabilities.",
          icon: <Building className="h-6 w-6" />,
          gradient: "from-indigo-500 to-purple-600"
        },
        {
          title: "RAG ChatBot System",
          description: "Build a Retrieval Augmented Generation chatbot for intelligent document processing and query responses with contextual understanding.",
          icon: <Cpu className="h-6 w-6" />,
          gradient: "from-teal-500 to-cyan-600"
        },
        {
          title: "Document Identification System",
          description: "Create ML systems for Indian document identification including Aadhaar, PAN, bank statements, and other official documents.",
          icon: <Shield className="h-6 w-6" />,
          gradient: "from-yellow-500 to-orange-600"
        },
        {
          title: "Fire Detection ML System",
          description: "Develop machine learning models for early fire detection and prevention systems with real-time monitoring capabilities.",
          icon: <Brain className="h-6 w-6" />,
          gradient: "from-red-500 to-orange-600"
        }
      ]
    },
  
  ];

  return (
    <section id="themes" className="py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #fbbf24 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, #d97706 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 font-semibold text-lg tracking-wide uppercase">Problem Statements</span>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Challenges</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from real-world problem statements provided by leading industry partners
          </p>
        </div>

        <div className="space-y-16">
          {companies.map((company, companyIndex) => (
            <div key={companyIndex} className="space-y-8">
              {/* Company Header */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl px-8 py-4 border border-yellow-400/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-black font-bold text-sm">{company.logo}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                </div>
              </div>

              {/* Problems Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {company.problems.map((problem, problemIndex) => (
                  <div
                    key={problemIndex}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105"
                  >
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${problem.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {problem.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                            {problem.title}
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {problem.description}
                      </p>
                      
                      {/* Hover Arrow */}
                      {/* <div className="flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                        <span className="font-semibold mr-2">Learn More</span>
                        <ArrowRight className="h-5 w-5" />
                      </div> */}
                    </div>

                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Innovate?</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Choose your problem statement and start building solutions that matter
            </p>
            <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 flex items-center space-x-3 mx-auto">
              <span>Register Your Team</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}