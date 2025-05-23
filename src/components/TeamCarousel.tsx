
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  paragraph: string;
  image: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Abu Shama",
    role: "Founder & CEO",
    paragraph : "( AI Engineer )",
    image: "https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2F68361213-112f-4262-8322-b1f7dfa6b488%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4Q4QHSYODJ%252F20250523%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20250523T014855Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D485c8f6c517f2489b7df0083012947f6bcc26319a12d24884b9885f1eef7090f&sign=l5ZJKuGB_Y7-qw-M70HfBBKq7uIPGe_TBUs8qMKpJe8" ,
    initials: "SJ",
  },
  {
    name: "Rameez",
    role: "Co-Founder & CTO",
    paragraph : "( AI Engineer )",
    image: "rameez.jpg",
    initials: "MC",
  },
  {
    name: "Muzzammil Afridi",
    role: "CO-Founder/COO",
    paragraph : "( Full Stack Developer )",
    image: "./pic11.jpg",
    initials: "DW",
  },
  {
    name: "Aamina",
    role: "Co-Founder",
    paragraph : "( Front-End Developer )",
    image: "ameena.jpg",
    initials: "ER",
  },
  {
    name: "Aatika",
    role: "Senior Manager",
    paragraph : "( Front-End Developer )",
    image: "ateeka.jpg",
    initials: "ER",
  },
  {
    name: "Chithra Gowda",
    role: "Senior Manager",
    paragraph : "( UI And UX Designer )",
    image: "./chitra.jpg",
    initials: "ER",
  },
  {
    name: "Neamatullah Meer",
    role: "Manager",
    paragraph : "( SEO  )",
    image: "nematullah.jpg",
    initials: "ER",
  },
];

const TeamCarousel = () => {
  return (
    <section id="team" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented professionals are dedicated to bringing your digital vision to life
            with expertise and passion.
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
                <Card className="border-none shadow-md">
                  <CardContent className="flex flex-col items-center p-6">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-xl">{member.name}</h3>
                    <p className="text-gray-500">{member.role}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TeamCarousel;

