import React from 'react';
import { Award, Users, Star } from 'lucide-react';

export default function ChiefGuest() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chief <span className="text-yellow-400">Guest</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're honored to have distinguished leaders join us for this incredible event
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-16 w-16 text-yellow-600" />
                    </div>
                    <div className="text-white font-bold text-lg">Chief Guest</div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Hon. Devendra Fadnavis
                  </h3>
                  <p className="text-xl text-yellow-600 font-semibold mb-4">
                    Chief Minister of Maharashtra
                  </p>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span>Political Leader</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span>Technology Advocate</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  A visionary leader committed to transforming Maharashtra into a technology hub. 
                  Hon. Fadnavis has been instrumental in promoting digital innovation and 
                  entrepreneurship in the state. His initiatives have created numerous 
                  opportunities for young developers and startup enthusiasts.
                </p>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4">
                  <p className="text-gray-700 italic">
                    "Innovation is the key to Maharashtra's future. Events like CodeSprint 2025 
                    are building the next generation of tech leaders who will drive our state's 
                    digital transformation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}