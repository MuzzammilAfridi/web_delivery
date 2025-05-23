
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce solution with product filtering, cart management, and secure checkout.",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=700&h=500",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Health & Fitness App",
    description: "Mobile-first application for tracking workouts, nutrition, and personal health goals.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=700&h=500",
    technologies: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with virtual tours and agent communication.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=700&h=500",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
  },
  {
    title: "Learning Management System",
    description: "Educational platform with course creation, student tracking, and interactive assessments.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=700&h=500",
    technologies: ["Angular", "Django", "AWS"],
  },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Latest Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent web and mobile application projects delivered with excellence
            and tailored to our clients' unique needs.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3 p-1">
                <Card className="border-none shadow-lg overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      View Project <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectShowcase;
