"use client";

import { useState, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import tradeImage from "../../public/background.jpg";
import emailjs from "emailjs-com";

const ContactForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configurar el envío de correo con EmailJS
    emailjs
      .send(
        "service_294f0hn",
        "template_029iw74",
        formData,
        "VWKZg5D-msfCGB2ud"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto."
          );
        },
        (err) => {
          console.log("FAILED...", err);
          alert(
            "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde."
          );
        }
      );

    setFormData({ to_name: "", from_name: "", message: "" });
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="relative md:w-1/2 h-64 md:h-auto">
          <Image
            src={tradeImage}
            alt="Comercio Exterior"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-8 z-20">
            <h2 className="text-3xl font-bold text-white mb-4">Contáctanos</h2>
            <p className="text-gray-300 mb-8 hidden md:block">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos
              en contacto contigo lo antes posible.
            </p>
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 mr-2 text-sm"
              />
              <span className="text-gray-300">contacto@vielcomex.com</span>
            </div>
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-gray-400 mr-2 text-sm"
              />
              <span className="text-gray-300">+54 113647-7584</span>
            </div>
            <div className="mb-8 flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-gray-400 mr-2 text-sm"
              />
              <span className="text-gray-300">
                Hipolito Yrigoyen 850, CABA, Buenos Aires.
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-6 md:p-8 bg-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-200 mr-2 text-sm"
                />
                Nombre
              </label>
              <input
                type="text"
                id="to_name"
                name="to_name"
                value={formData.to_name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
                placeholder="Ingrese su nombre"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-200 mr-2 text-sm"
                />
                Correo Electrónico
              </label>
              <input
                type="email"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
                placeholder="Ingrese su correo electrónico"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                <FontAwesomeIcon
                  icon={faComment}
                  className="text-gray-200 mr-2 text-sm"
                />
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
                placeholder="Escriba su mensaje aquí"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactForm;
