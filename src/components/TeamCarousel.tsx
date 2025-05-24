import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Link } from "react-router-dom";

interface TeamMember {
  name: string;
  role: string;
  paragraph: string;
  image: string;
  initials: string;
  profile: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Abu Shama",
    role: "Founder & CEO",
    paragraph: "( AI Engineer )",
    image: "./abushama.jpg",
    initials: "SJ",
    profile: "https://www.linkedin.com/in/abu-shama-1b1266222/",
  },
  {
    name: "Rameez",
    role: "Co-Founder & CTO",
    paragraph: "( AI Engineer )",
    image: "rameez.jpg",
    initials: "MC",
    profile: "https://www.linkedin.com/in/ramij-raj-rahaman-ba9774131/",
  },
  {
    name: "Muzzammil Afridi",
    role: "CO-Founder/COO",
    paragraph: "( Full Stack Developer )",
    image: "./pic11.jpg",
    initials: "DW",
    profile: "https://www.linkedin.com/in/muzzammil-afridi",
  },
  {
    name: "Ameena Tazeen",
    role: "Co-Founder",
    paragraph: "( Front-End Developer )",
    image: "ameena.jpg",
    initials: "ER",
    profile: "https://www.linkedin.com/in/ameena-tazeen-m-69b906307/",
  },
  {
    name: "Aatika",
    role: "Co-Founder",
    paragraph: "( Front-End Developer )",
    image: "ateeka.jpg",
    initials: "ER",
    profile: "https://www.linkedin.com/in/aatikamariam/",
  },
  {
    name: "Arshad Iqbal",
    role: "Co-Founder",
    paragraph: "( Cloud Engineer )",
    image: "arshad.jpg",
    initials: "ER",
    profile: "https://www.linkedin.com/in/arshad-iqbal-5828542a9/",
  },
  {
    name: "Haleema Sadiya",
    role: "Co-Founder",
    paragraph: "( Full Stack Java Developer )",
    image: "haleema.jpg",
    initials: "ER",
    profile: "https://www.linkedin.com/in/haleema-sadiya-b3a1032b2/",
  },
  {
    name: "Chithra Gowda",
    role: "Senior Manager",
    paragraph: "( UI And UX Designer )",
    image: "./chitra.jpg",
    initials: "ER",
    profile: "",
  },
  {
    name: "Neamatullah Meer",
    role: "Manager",
    paragraph: "( SEO )",
    image: "nematullah.jpg",
    initials: "ER",
    profile: "",
  },
];

const TeamCarousel = () => {
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextButtonRef.current?.click();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="team" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented professionals are dedicated to bringing your digital
            vision to life with expertise and passion.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <a
                  href={member.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="border-none shadow-md">
                    <CardContent className="flex flex-col items-center p-6">
                      <Avatar className="h-32 w-32 mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-xl">{member.name}</h3>
                      <p className="text-gray-500">{member.role}</p>
                      <p className="text-gray-500 text-[14px]">
                        {member.paragraph}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext
              ref={nextButtonRef}
              className="relative inset-0 translate-y-0"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TeamCarousel;
