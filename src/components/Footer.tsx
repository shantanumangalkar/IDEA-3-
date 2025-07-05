import React from 'react';
import { Code, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Themes", href: "#themes" },
    { name: "Schedule", href: "#schedule" },
    { name: "Partners", href: "#partners" },
    { name: "FAQs", href: "#faqs" }
  ];

  const contactInfo = [
    // { icon: Mail, text: "#", href: "mailto:info@codesprint2025.com" },
    { icon: Phone, text: "+91 8421358609", href: "tel:8421358609" },
    { icon: Phone, text: "+91 9529123561", href: "tel:9529123561" },
    { icon: MapPin, text: "Nagpur, Maharashtra, India", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Code className="h-10 w-10 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">
                <span className="text-yellow-400">Idea³</span> 2025
              </span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
               Confederation of Indian Industry (CII) Student Innovation Challenge organized by St Vincent Pallotti College. 
                  Submit your A3 poster and prototype to compete for ₹50,000 in prizes.
            </p>
            
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-12 h-12 bg-gray-800 hover:bg-yellow-400 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-400/25"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300"></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
              <span>Contact Info</span>
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/10 transition-all duration-300">
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>        
        {/* Bottom Section */}
        <div className="mt-5 pt-5 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-1">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Idea³. All rights reserved. 
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}