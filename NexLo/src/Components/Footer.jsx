import React from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-iceBlue text-darkBlue">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-10 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand Section */}
        <div className="col-span-2">
          <h2 className="text-3xl font-bold text-darkBlue mb-2">NexLo</h2>
          <p className="text-blue text-sm leading-relaxed mb-6">
            Connecting you with trusted local businesses. Discover, connect, and
            grow your community with NexLo.
          </p>
          <p className="text-lightBlue text-sm">
            © {new Date().getFullYear()} NexLo Technologies
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-blue font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-darkBlue text-sm">
            <li>
              <Link to="/about" className="hover:text-blue">About Us</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-blue">Careers</Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-blue">Team</Link>
            </li>
            <li>
              <Link to="/partner" className="hover:text-blue">Partner With Us</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-blue font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-darkBlue text-sm">
            <li>
              <Link to="/help" className="hover:text-blue">Help Center</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue">Contact Us</Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-blue">FAQs</Link>
            </li>
            <li>
              <Link to="/report" className="hover:text-blue">Report Issue</Link>
            </li>
          </ul>
        </div>

        {/* Social Links (React Router style) */}
        <div>
          <h3 className="text-blue font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-darkBlue">
            <Link to="/linkedin"><Linkedin className="hover:text-blue transition-colors" size={20} /></Link>
            <Link to="/instagram"><Instagram className="hover:text-blue transition-colors" size={20} /></Link>
            <Link to="/facebook"><Facebook className="hover:text-blue transition-colors" size={20} /></Link>
            <Link to="/twitter"><Twitter className="hover:text-blue transition-colors" size={20} /></Link>
            <Link to="/youtube"><Youtube className="hover:text-blue transition-colors" size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;