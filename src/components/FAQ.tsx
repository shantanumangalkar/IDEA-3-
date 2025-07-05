import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Idea³ (Innovate. Design. Explain in A3.)?",
      answer: "Idea³ is India's premier innovation competition where teams of 1-4 participants develop comprehensive solutions through research, visual presentation (A3 poster), and functional prototyping. It's designed to challenge participants to create real-world impact through innovative thinking and practical implementation."
    },
    {
      question: "Who can participate and what are the team requirements?",
      answer: "Teams must consist of 1 to 4 participants from any college currently pursuing (Btech, Mtech, Bca, Mca). Each team must assign a Team Leader for communication. There are no specific prerequisites - we welcome participants from all backgrounds and skill levels who are passionate about innovation."
    },
    {
      question: "What is the registration fee and what does it include?",
      answer: "The registration fee is ₹300 per team (non-refundable). This fee includes lunch for all team members and official e-certificates for all registered participants. Payment confirmation must be uploaded during registration via the official Google Form."
    },
    {
      question: "What do we need to submit for the competition?",
      answer: "Teams must submit: 1) A well-structured A3-size poster in PDF format explaining your solution, including title, abstract, problem statement, proposed approach, methodology, and expected output. 2) A functional prototype or simulation (digital, physical, or software-based) that will be demonstrated if shortlisted."
    },
    {
      question: "How will entries be evaluated?",
      answer: "Entries are evaluated based on: Innovation & Originality, Relevance to Industry Problem Statement, Technical Feasibility, Visual Presentation (Poster Quality), and Functionality of the Prototype. Shortlisted entries proceed to the final presentation round on July 19."
    },
    {
      question: "What are the prizes and recognition opportunities?",
      answer: "The total prize pool is Upto ₹50,000 with cash prizes for top performers. There's also a special Pallottine Consultation Prize for outstanding real-world impact. All participants receive official e-certificates, and winners gain industry recognition and networking opportunities."
    },
    {
      question: "Are there any restrictions on the type of solutions we can develop?",
      answer: "All submitted content must be original work created by your team. Use of AI-generated or AI-assisted content is permitted if clearly declared and explained. Teams must respect intellectual property rights and avoid plagiarism. Only original, innovative solutions that address real-world problems are accepted."
    },
    {
      question: "What happens if we're shortlisted for the final round?",
      answer: "Shortlisted teams will be announced on July 14 and will present their solutions live on July 19 during the final presentation and judging session. This includes demonstrating your prototype and defending your approach before the expert panel, followed by the prize distribution ceremony."
    }
  ];

  return (
    <section id="faqs" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-yellow-400 font-semibold text-lg tracking-wide uppercase">Got Questions?</span>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">FAQs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to the most commonly asked questions about Idea³ 2025
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-yellow-400/30 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-yellow-400/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-xl flex items-center justify-center border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-all duration-300">
                    <HelpCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <span className="font-bold text-white text-lg group-hover:text-yellow-400 transition-colors duration-300">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="pl-14">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
  <div className="inline-block w-full max-w-4xl bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-yellow-400/20">
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Still have questions?</h3>
    <p className="text-gray-300 mb-6 text-sm sm:text-base">
      Our team is here to help! Reach out to us for any additional information about Idea³ 2025.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-6 sm:gap-8 text-left">
      <p className="text-white text-sm sm:text-base">
        <span className="text-yellow-400 font-bold">Coordinator:</span> Pranav Shende
        <br />
        <span className="text-gray-400">Contact:</span> 8421358609
      </p>
      <p className="text-white text-sm sm:text-base">
        <span className="text-yellow-400 font-bold">Co-Coordinator:</span> Shantanu Mangalkar
        <br />
        <span className="text-gray-400">Contact:</span> 9529123561
      </p>
      <p className="text-white text-sm sm:text-base">
        <span className="text-yellow-400 font-bold">Technical Lead:</span> Hitesh Warhate
        <br />
        <span className="text-gray-400">Contact:</span> 9665090652
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}