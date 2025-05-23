
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ProjectShowcase from "@/components/ProjectShowcase";
import TeamCarousel from "@/components/TeamCarousel";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <ProjectShowcase />
      <TeamCarousel />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
