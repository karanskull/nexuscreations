import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <img src={logo} alt="NexusReno Logo" className="h-12 w-auto" />
            <p className="text-sm text-black">
              Subscribe to our newsletter for the latest updates on features and offerings.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Here"
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="w-20 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-200">
                Join
              </button>
            </form>
            <p className="text-xs text-black">
              By subscribing, you consent to our Privacy Policy and receive updates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-black hover:text-gray-600">Home</Link></li>
              <li><Link to="/services/bathroom-renovations" className="text-black hover:text-gray-600">Bathroom Renovations</Link></li>
              <li><Link to="/services/kitchen-transformations" className="text-black hover:text-gray-600">Kitchen Transformations</Link></li>
              <li><Link to="/services/custom-tile-installations" className="text-black hover:text-gray-600">Custom Tile Installations</Link></li>
              <li><Link to="/about" className="text-black hover:text-gray-600">About Us</Link></li>
              <li><Link to="/contact" className="text-black hover:text-gray-600">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-2 text-black hover:text-gray-600">
                <Facebook size={20} /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-black hover:text-gray-600">
                <Instagram size={20} /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-black hover:text-gray-600">
                <Twitter size={20} /> X
              </a>
              <a href="#" className="flex items-center gap-2 text-black hover:text-gray-600">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-black hover:text-gray-600">
                <Youtube size={20} /> YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black">
              © 2024 Nexus Creation. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-black">
              Made by <a href="https://www.instagram.com/_karanvirkang_" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-gray-600">Karanvir Singh Kang</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 