'use client'
import Image from 'next/image';
import React from 'react';
import { easeInOut, motion } from 'framer-motion';

export default function Team() {
  const teamMembers = [
    {
      title: "Founder & CEO",
      image: "/shiba.png",
      name: "Shiba Prasad Dahal",
      role: "Visionary Leader",
    },
    {
      title: "CTO",
      image: "/aashu.jpg",
      name: "Aashutosh Dahal",
      role: "Co-Founder and Head Team Lead",
    },
    // add more members if needed
  ];

  // Card component inside same file
  const Card: React.FC<{ title: string; image: string; name: string; role: string }> = ({ title, image, name, role }) => {
    return (
      <div className="flex flex-col items-center text-center gap-4 w-80">
        {/* Title */}
        <h2 className="text-3xl font-light">{title}</h2>

        {/* Image with name inside */}
        <div className="relative w-full h-96 overflow-hidden shadow-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
            <h3 className="text-xl font-semibold text-black">{name}</h3>
        {/* Role */}
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    );
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
    <motion.h1
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", ease: easeInOut, duration:0.2 }}
        viewport={{ once: true }}
        className="text-6xl text-center pt-25 font-bold mb-35 text-gray-800"
      >
        MEET OUR TEAM
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-40">
        {teamMembers.map((member, index) => (
          <Card
          key={index}
          title={member.title}
          image={member.image}
          name={member.name}
          role={member.role}
          />
        ))}
      </div>
    </section>
  );
}
