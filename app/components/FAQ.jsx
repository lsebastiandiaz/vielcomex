"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "¿Cómo puedo comenzar a importar/exportar con Vielcomex?",
    answer:
      "Para comenzar a importar/exportar con Vielcomex, puedes contactar a nuestro equipo de ventas o visitar nuestra página de inicio para más información.",
  },
  {
    question: "¿Cuáles son los beneficios de trabajar con Vielcomex?",
    answer:
      "Los beneficios de trabajar con Vielcomex incluyen acceso a una red global de proveedores y clientes, asesoramiento experto en regulaciones internacionales y más.",
  },
  {
    question: "¿Ofrecen servicios de consultoría personalizados?",
    answer:
      "Sí, en Vielcomex ofrecemos servicios de consultoría personalizados adaptados a las necesidades específicas de cada cliente.",
  },
  {
    question: "¿Qué países cubren sus servicios de importación/exportación?",
    answer:
      "Nuestros servicios de importación/exportación cubren una amplia gama de países en todo el mundo, incluyendo mercados emergentes y desarrollados.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold text-white">
                    {item.question}
                  </p>
                  <FontAwesomeIcon
                    icon={openIndex === index ? faChevronUp : faChevronDown}
                    className="text-white text-lg"
                  />
                </div>
                {openIndex === index && (
                  <p className="text-gray-300 mt-4">{item.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
