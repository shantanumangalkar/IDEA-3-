import React from 'react';
import { Clock, Users, Trophy, Star, FileText, Award, CheckCircle } from 'lucide-react';

export default function Schedule() {
  const scheduleItems = [
    {
      date: "July 5",
      title: "Registration Opens",
      description: "Begin your journey - register your team via Google Form",
      icon: <Users className="h-5 w-5" />,
      status: "completed"
    },
    {
      date: "July 12",
      title: "Registration Deadline",
      description: "Last day for team registration and fee payment",
      icon: <Clock className="h-5 w-5" />,
      status: "active"
    },
    {
      date: "July 12",
      title: "A3 Poster Submission",
      description: "Submit your detailed solution poster in PDF format",
      icon: <FileText className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "July 13",
      title: "Internal Evaluation",
      description: "Expert panel reviews all submissions",
      icon: <Star className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "July 14",
      title: "Shortlist Announcement",
      description: "Display of qualified teams for final round",
      icon: <Trophy className="h-5 w-5" />,
      status: "upcoming"
    },
    {
      date: "July 19",
      title: "Final Presentation & Awards",
      description: "Live presentations, judging, and prize distribution",
      icon: <Award className="h-5 w-5" />,
      status: "upcoming"
    }
  ];

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-yellow-400 font-semibold text-lg tracking-wide uppercase block mb-2">Competition Timeline</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Competition <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Schedule</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-4">Key dates and milestones for Idea³ 2025</p>
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 text-sm sm:text-base">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-semibold">Registration Active</span>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col sm:flex-row items-start sm:items-center p-6 sm:p-8 rounded-3xl border transition-all duration-500 transform hover:scale-[1.01] ${
                item.status === 'completed' 
                  ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 shadow-lg shadow-green-500/10' 
                  : item.status === 'active'
                  ? 'bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-yellow-400/30 shadow-lg shadow-yellow-400/10'
                  : 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-yellow-400/30'
              }`}
            >
              {/* Vertical Line */}
              {index < scheduleItems.length - 1 && (
                <div className={`hidden sm:block absolute left-10 top-full w-0.5 h-16 ${
                  item.status === 'completed' ? 'bg-green-500' : 
                  item.status === 'active' ? 'bg-yellow-400' : 'bg-gray-600'
                }`}></div>
              )}

              {/* Icon */}
              <div className="flex-shrink-0 mr-0 sm:mr-6 mb-4 sm:mb-0">
                <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  item.status === 'completed'
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                    : item.status === 'active'
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                    : 'bg-gradient-to-br from-gray-600 to-gray-700 group-hover:from-yellow-400/50 group-hover:to-yellow-600/50'
                }`}>
                  {item.status === 'completed' ? (
                    <CheckCircle className="h-7 w-7 text-white" />
                  ) : item.status === 'active' ? (
                    <div className="relative">
                      {item.icon}
                      <div className="absolute inset-0 bg-black/20 rounded-full animate-ping"></div>
                    </div>
                  ) : (
                    <div className="text-white">{item.icon}</div>
                  )}
                  {/* Glow */}
                  {item.status === 'active' && (
                    <div className="absolute inset-0 bg-yellow-400/30 rounded-2xl blur-xl animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className={`text-lg sm:text-2xl font-bold transition-colors ${
                    item.status === 'completed' ? 'text-green-400' :
                    item.status === 'active' ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400'
                  }`}>
                    {item.title}
                  </h3>
                  <div className={`text-sm sm:text-base font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-xl ${
                    item.status === 'completed'
                      ? 'text-green-400 bg-green-400/10'
                      : item.status === 'active'
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-gray-400 bg-gray-400/10'
                  }`}>
                    {item.date}
                  </div>
                </div>
                <p className="text-sm sm:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl border border-yellow-400/20 rounded-2xl px-4 py-3 sm:px-6 sm:py-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-semibold text-sm sm:text-base">Registration Deadline: July 12, 2025</span>
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
