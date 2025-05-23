
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
      step: "01"
    },
    {
      icon: Palette,
      title: "Design & Prototype",
      description: "Our design team creates intuitive wireframes and stunning visual designs that align with your brand identity.",
      step: "02"
    },
    {
      icon: Code,
      title: "Development",
      description: "We build your project using cutting-edge technologies, ensuring clean code, scalability, and optimal performance.",
      step: "03"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "After thorough testing, we launch your project and provide ongoing support to ensure continued success.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-10"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Let's discuss your project and bring your vision to life</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
