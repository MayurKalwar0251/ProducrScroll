import React, { useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ArrowUpRight,
  MapPin,
  Send,
} from "lucide-react";

const AnimatedLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="group relative flex items-center gap-2 w-fit text-gray-400 hover:text-white transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{children}</span>
      <ArrowUpRight
        className={`w-4 h-4 transition-all duration-300 transform
          ${
            isHovered ? "translate-x-1 -translate-y-1 opacity-100" : "opacity-0"
          }`}
      />
    </a>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    className="group relative p-2 rounded-full border border-gray-700 hover:border-blue-500 transition-colors duration-300"
  >
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
    <div className="absolute inset-0 rounded-full bg-blue-500/10 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
  </a>
);

const NewsletterInput = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative max-w-sm">
      <input
        type="email"
        placeholder="Enter your email"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-all duration-300"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2">
        <Send
          className={`w-5 h-5 transition-all duration-300 ${
            focused ? "text-blue-500 translate-x-1" : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 relative overflow-hidden min-h-screen flex flex-col">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-gradient" />

      <div className="max-w-7xl mx-auto relative flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">ShopName</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted destination for quality products and exceptional
              service.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <AnimatedLink href="/shop">Shop Collection</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/about">About Us</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/blog">Blog & News</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/contact">Contact</AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <AnimatedLink href="/shipping">Shipping Info</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/returns">Returns & Exchanges</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/faq">FAQ</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/track-order">
                  Track Your Order
                </AnimatedLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <NewsletterInput />
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                <AnimatedLink href="mailto:contact@shopname.com">
                  contact@shopname.com
                </AnimatedLink>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                <span className="text-gray-400">
                  123 Commerce St, City, Country
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400">
            © {currentYear} ShopName. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <AnimatedLink href="/privacy">Privacy Policy</AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
