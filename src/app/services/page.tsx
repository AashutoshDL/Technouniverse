"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  const services = [
    {
      title: "Web Development",
      description:
        "We specialize in creating fast, modern, and scalable websites and web applications. Our team works closely with you to understand your business requirements, crafting custom solutions that deliver seamless user experiences. Whether it's a simple website or a complex web application, we ensure that it is responsive, secure, and optimized for performance, all while keeping your unique needs at the forefront.",
    },
    {
      title: "AR & 3D Solutions",
      description:
        "We design and develop immersive augmented reality (AR) experiences and advanced 3D visualizations that bring your ideas to life. From interactive product demos to cutting-edge architectural visualizations, our AR and 3D solutions enable users to engage with products or concepts in a more dynamic and hands-on way. These technologies offer enhanced customer experiences, helping businesses to stand out in a crowded market.",
    },
    {
      title: "Hardware Services",
      description:
        "Our hardware services cover everything from the sale of top-quality computer parts to professional upgrades and repairs. We work with businesses and individuals to ensure that their computer systems and hardware are running at optimal performance. Whether it's upgrading your workstation or performing in-depth diagnostics on a malfunctioning printer, we deliver fast, reliable, and affordable solutions with a focus on extending the lifespan of your hardware.",
    },
    {
      title: "Automation Systems",
      description:
        "We help businesses streamline operations and boost efficiency through automation. Our automation systems optimize workflows, eliminate manual processes, and enhance data accuracy. Whether it's automating internal business operations, customer service tasks, or marketing processes, we ensure your systems are integrated and functioning smoothly, ultimately saving you time, reducing errors, and improving productivity across all levels of your organization.",
    },
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center min-h-screen aboutus text-white p-8">
      {/* Animated Heading */}
      <motion.h1
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        viewport={{ once: true }}
        className="text-6xl font-light text-center mt-15 mb-16"
      >
        Our Services
      </motion.h1>

      <div className="w-full max-w-max flex flex-col mt-20 gap-10 ml-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="cursor-pointer border border-gray-400 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex items-center justify-between">
              <h2
                className={`text-3xl font-light transition-all duration-300 ${
                  activeIndex === index ? "font-semibold" : ""
                }`}
              >
                {service.title}
              </h2>

              {/* Arrow Rotate */}
              <div
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown size={28} />
              </div>
            </div>

            {/* Description Dropdown */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "max-h-40 opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-lg text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="flex flex-col p-7 mt-14 mb-10 text-3xl bg-black hover:bg-white hover:text-black hover:overflow-hidden transition-all duration-500 ease-in-out"
          onClick={() => {
            router.push("/e-com");
          }}
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}
