'use client';

import {   motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="aboutus min-h-screen relative overflow-hidden pb-40">
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: hovering ? 14 : 1,
          backgroundColor: hovering ? "#ffffff" : "transparent",
          borderColor: hovering ? "#000000" : "#ffffff"
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.1
        }}
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "2px solid white",
          mixBlendMode: "difference"
        }}
      />


      <h2 className="text-6xl font-bold text-center text-white pt-30 mb-20">Who are we?</h2>

      <p
        className="text-2xl leading-relaxed p-15 mb-8 mx-80 text-white text-center tracking-wide box-border border-2"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        At Technouniverse, we are a dynamic team of young entrepreneurs driven by an unwavering passion for pushing the boundaries of innovation and advancing the frontiers of technology. Our mission is to deliver cutting-edge solutions that are not only future-ready and user-centric but also designed to create a lasting global impact across industries. We specialize in building powerful web and mobile applications, developing immersive augmented reality (AR) experiences, and pioneering advanced 3D technologies, helping businesses and individuals not just adapt to an ever-evolving digital landscape, but actively shape it to their advantage. Our expertise extends beyond software solutions; we are also your trusted partner for comprehensive hardware services. We sell and professionally repair a wide range of computer parts and printer components, ensuring that your devices remain reliable, efficient, and ready to support your goals. In addition, Technouniverse empowers organizations by automating critical systems and workflows, streamlining operations to drive efficiency, boost productivity, and unlock new opportunities for growth. Whether you are seeking to elevate your digital presence with world-class applications, transform your internal operations through automation, or maintain and upgrade your essential hardware, Technouniverse stands committed to turning bold ideas into impactful realities, helping you stay ahead in a world where technology leads the way.
      </p>
    </section>
  );
}
