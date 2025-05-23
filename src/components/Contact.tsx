
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@webappdelivery.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Business Ave, Suite 100",
      description: "San Francisco, CA 94107"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Start Your <span className="text-blue-600">Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge digital solutions? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-1">{info.content}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <Input placeholder="John" className="border-gray-200 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input placeholder="Doe" className="border-gray-200 focus:border-blue-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="john@example.com" className="border-gray-200 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                        <option>Select a service</option>
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>E-commerce</option>
                        <option>Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        rows={4}
                        className="border-gray-200 focus:border-blue-500" 
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </div>
                
                {/* Side content */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-6">Why Work With Us?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Free consultation and project estimation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Dedicated project manager for your account</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Transparent pricing with no hidden costs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>24/7 support throughout the project</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>100% satisfaction guarantee</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <h5 className="font-bold mb-2">Get Started Today!</h5>
                    <p className="text-sm opacity-90">Response time: Within 2 hours during business days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
