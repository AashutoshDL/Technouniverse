'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react'; // optional: small arrow icons, can use emoji too

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Web Development",
      description: "We build fast, modern, and scalable websites and applications tailored to your needs."
    },
    {
      title: "AR & 3D Solutions",
      description: "Create immersive augmented reality experiences and powerful 3D visualizations."
    },
    {
      title: "Hardware Services",
      description: "We sell, upgrade, and professionally repair computer parts and printers."
    },
    {
      title: "Automation Systems",
      description: "Automate business processes to boost efficiency and growth."
    }
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center min-h-screen aboutus text-white p-8">
      <h1 className="text-6xl font-light text-center mt-15 mb-16">Our Services</h1>

      <div className="w-full max-w-max flex flex-col mt-20 gap-10 ml-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="cursor-pointer border border-gray-400 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex items-center justify-between">
              <h2 className={`text-3xl font-light transition-all duration-300 ${
                activeIndex === index ? "font-semibold" : ""
              }`}>
                {service.title}
              </h2>

              {/* Arrow Rotate */}
              <div className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}>
                <ChevronDown size={28} />
              </div>
            </div>

            {/* Description Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-lg text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}