
import { Globe, Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">WebApp Delivery</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative web and mobile solutions. 
              We deliver excellence in every project.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-white transition-colors cursor-pointer">E-commerce Solutions</li>
              <li className="hover:text-white transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Consultation</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Our Team</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <span>hello@webappdelivery.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 mt-1" />
                <span>123 Business Ave, Suite 100<br />San Francisco, CA 94107</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WebApp Delivery. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
