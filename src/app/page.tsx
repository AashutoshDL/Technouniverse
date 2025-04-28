'use client'
import About from "./about/page";
import Services from "./services/page";
import Team from "./team/page";

export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen cursor-pointer">
      {/* Header */}
      <header className="w-full py-14 bg-white relative">
        <h1 className="text-2xl text-center">Knowing <b>Technouniverse</b></h1>
        <h1 className="absolute text-xl left-20 top-15 group">
        <span className="absolute transition-all duration-500 ease-linear opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-105">
        TCU
      </span>
      <span className="absolute transition-all duration-500 ease-linear opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
        TECHNOUNIVERSE
      </span>
        </h1>
      </header>
    
      <section className="flex flex-col items-center justify-center text-center py-38 px-4">
        <p className="text-main tracking-wide font-bold mb-6">
          TechnoUniverse
        </p>
        <p className="text-2xl tracking-medium font-light mb-24 px-80 text-center">
        At <b>Technouniverse</b>, we are young entrepreneurs driven to push the frontiers of technology. We build <b>future-ready</b>, user-centric solutions — from software development and digital transformation to <b>immersive AR</b> and advanced <b>3D technologies</b> — helping businesses and individuals not just adapt to the future, but shape it.</p>
        <button className="bg-black text-white text-3xl px-14 py-5 hover:bg-white hover:text-black hover:border-1 transition-all duration-500 ease-linear delay-200">
          Contact Us
        </button>
      </section>
      <About />
      <Team />
      <Services />
      <footer className="text-black bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <p className="text-lg font-semibold tracking-wide">Technouniverse</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex gap-6 mt-2">
          <a href="#" className="hover:text-white transition duration-300 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-white transition duration-300 text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
    </main>
  );
}
