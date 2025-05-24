
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
      <section id="services">

      <Services />
      </section>
      <section id="process">
      <Process />
      </section>
      <section id="#">
      <ProjectShowcase />
      </section>
      <section id="team">
      <TeamCarousel />
      </section>
      <section id="testimonials">
      <Testimonials />
          </section>
      <section id="contact">
      <Contact />
      </section>
      <section id="footer">
      <Footer />
      </section>
      <WhatsAppChat />
    </div>
  );
};

export default Index;
