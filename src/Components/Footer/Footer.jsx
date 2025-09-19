import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram,
  FaLinkedin,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-white">CodeRED_LIGHT</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your comprehensive solution for tracking therapy progress and nutrition plans. 
              We're dedicated to helping you achieve your health goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Therapists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Physical Therapy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Nutrition Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Progress Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Personal Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Wellness Coaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Rehabilitation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Health Street, Medical District, Jaipur 302006</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">support@coderedlight.com</span>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="text-md font-medium text-white mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition flex-1"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-lg hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CodeRED_LIGHT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition">Cookie Policy</a>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6 pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Made with CodeRED_LIGHT for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;