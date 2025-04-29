"use client";
import { motion } from "framer-motion";
import About from "./about/page";
import Services from "./services/page";
import Team from "./team/page";
import { useRef } from "react";


export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col min-h-screen cursor-pointer">
      <header className="w-full py-14 bg-white relative">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl text-center"
        >
          Knowing <b>Technouniverse</b>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute text-xl left-20 top-15 group"
        >
          {/* Your TCU/TECHNOUNIVERSE code */}
          <span className="absolute transition-all duration-500 ease-linear opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-105">
            TCU
          </span>
          <span className="absolute transition-all duration-500 ease-linear opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
            TECHNOUNIVERSE
          </span>
        </motion.h1>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-38 px-4">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-main tracking-wide font-bold mb-6"
        >
          TechnoUniverse
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl tracking-medium font-light mb-24 px-80 text-center"
        >
          At Technouniverse, we are young entrepreneurs driven to push the
          frontiers of technology. We build future-ready, user-centric solutions
          — from software development and digital transformation to immersive AR
          and advanced 3D technologies — helping businesses and individuals not
          just adapt to the future, but shape it.
        </motion.p>

        <motion.button
          onClick={handleScrollToContact}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white text-3xl px-14 py-5 hover:bg-white hover:text-black hover:border-1 transition-all duration-500 ease-linear delay-200"
        >
          Contact Us
        </motion.button>
      </section>
      <About />
      <Team />  
      <Services />
      <footer ref={contactRef} className="text-black bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-semibold tracking-wide">Technouniverse</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div>
              <p className="text-sm font-medium">Emails:</p>
              <a href="mailto:technouniversenp@gmail.com" className="text-sm hover:text-gray-200 transition duration-300">
                technouniversenp@gmail.com
              </a>
              <br />
              <a href="mailto:aashudahal11@gmail.com" className="text-sm hover:text-gray-200 transition duration-300">
                aashudahal11@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-medium">Phone:</p>
              <a href="tel:9803133855" className="text-sm hover:text-gray-200 transition duration-300">
                9803133855
              </a>
              <br />
              <a href="tel:9851052369" className="text-sm hover:text-gray-200 transition duration-300">
                9851052369
              </a>
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            <a
              href="#"
              className="hover:text-gray-200 transition duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
