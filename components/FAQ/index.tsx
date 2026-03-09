"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "¿Qué es BuildIn?",
    answer:
      "BuildIn es un marketplace digital que conecta desarrolladores inmobiliarios con inversores que quieren participar en proyectos reales desde etapas tempranas, de forma clara y 100% online.",
  },
  {
    id: 2,
    question: "¿Qué tipo de proyectos se publican en la plataforma?",
    answer:
      "En BuildIn se publican proyectos inmobiliarios de diverso tipo: residencial, comercial, mixto y más. Todos pasan por un proceso de validación antes de estar disponibles para inversores.",
  },
  {
    id: 3,
    question: "¿Cómo puedo invertir en un proyecto?",
    answer:
      "Para invertir, debés crear una cuenta, verificar tu identidad y explorar los proyectos disponibles. Una vez que elegís uno, podés revisar toda la información y confirmar tu participación de forma 100% digital.",
  },
  {
    id: 4,
    question: "¿BuildIn garantiza la rentabilidad de las inversiones?",
    answer:
      "BuildIn no garantiza rentabilidad. Como toda inversión, existen riesgos asociados. Ofrecemos información transparente y detallada para que cada inversor pueda tomar decisiones informadas.",
  },
  {
    id: 5,
    question: "¿Cómo pueden los desarrolladores publicar un proyecto?",
    answer:
      "Los desarrolladores pueden registrarse en la plataforma, completar el perfil de su empresa y enviar un proyecto para revisión. Nuestro equipo evalúa la documentación y, si cumple los requisitos, lo publica en la plataforma.",
  },
];

function FAQItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(item.id === 1);

  return (
    <div className="shadow-sm rounded-sm p-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <button
        
        className="flex w-full items-start gap-4 text-left group"
        aria-expanded={isOpen}
      >
        {/* Icon */}
        <span
          className={`mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center transition-colors duration-300 ${
            isOpen ? "text-blue-600" : "text-blue-600"
          }`}
        >
          {isOpen ? (
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="3" rx="1.5" fill="#1D4ED8" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="7.5" width="18" height="3" rx="1.5" fill="#1D4ED8" />
              <rect
                x="10.5"
                width="18"
                height="3"
                rx="1.5"
                transform="rotate(90 10.5 0)"
                fill="#1D4ED8"
              />
            </svg>
          )}
        </span>

        {/* Question */}
        <span
          className={`text-base font-semibold leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-[#1a2b6b]"
              : "text-[#1a2b6b] group-hover:text-blue-700"
          }`}
        >
          {item.question}
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-4 pl-9 text-sm text-gray-500 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function PreguntasFrecuentes() {
  const leftColumn = faqData.filter((_, i) => i % 2 === 0);
  const rightColumn = faqData.filter((_, i) => i % 2 !== 0);

  return (
    <section className="w-full bg-white pb-16">
      {/* Header arch */}
      <div className="flex justify-center">
        <div className="relative h-60 w-[813px] flex justify-center items-center">
        <Image src="/assets/images/svg/faq.svg" alt="FAQ" fill className="object-cover" />
          <h4 className="text-white text-center lg:text-left leading-10 text-[40px] font-semibold relative z-20 font-manrope">
            Preguntas Frecuentes
          </h4>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto px-8 pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
        {/* Left Column */}
        <div>
          {leftColumn.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>

        {/* Right Column */}
        <div>
          {rightColumn.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-end max-w-6xl px-8 mx-auto">
          <Link href={"/"} className="font-bold font-manrope text-2xl text-brand-blue hover:underline">Volver al Inicio</Link>
      </div>
    </section>
  );
}