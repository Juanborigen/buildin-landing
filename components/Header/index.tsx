"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Acerca de Buildin", href: "#acerca" },
  { label: "Inversores", href: "#inversores" },
  { label: "Desarrollistas", href: "#desarrollistas" },
  { label: "Contacto", href: "#contacto" },
  { label: "FAQs", href: "/preguntas-frecuentes" },
];

export default function Header({isFixed}: {isFixed: boolean}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`flex justify-center ${isFixed ? "fixed" : ""} top-0 left-0 right-0 z-50`}>
      <div className="lg:min-w-7xl min-w-11/12 bg-[#507cbe21] backdrop-blur-2xl lg:px-16 px-8 py-4 flex items-center justify-between rounded-b-[40px]">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={"/assets/images/logo-white.svg"} alt="Logo Buildin" width={160} height={100} />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm hover:text-blue-900 font-inter transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ingresar"
            className="bg-blue-900 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-blue-800 transition-colors duration-200"
          >
            Ingresar
          </a>
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
        <div className={`${menuOpen ? "" : "translate-x-full"} md:hidden absolute w-screen h-screen duration-500 left-0 top-0 bg-white border-t border-gray-100 px-6 py-4 flex flex-col justify-center gap-8`}>
          <button 
          className="font-black absolute right-10 top-10 text-4xl"
          onClick={() => setMenuOpen(false)}
          >&#10005;</button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 text-2xl text-center hover:text-blue-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ingresar"
            className="bg-blue-900 text-white text-sm font-medium px-5 py-2 rounded-full text-center hover:bg-blue-800 transition-colors"
          >
            Ingresar
          </a>
        </div>
    </header>
  );
}
