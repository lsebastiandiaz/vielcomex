import { FaHandsHelping, FaGlobe, FaChartLine } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Sobre Nosotros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <FaGlobe className="text-white text-6xl mb-4" />
            <h3 className="text-2xl text-white font-semibold mb-2">Expansión Global</h3>
            <p className="text-gray-300">Ayudamos a su negocio a expandirse globalmente con soluciones de comercio exterior.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHandsHelping className="text-white text-6xl mb-4" />
            <h3 className="text-2xl text-white font-semibold mb-2">Asesoría Especializada</h3>
            <p className="text-gray-300">Proporcionamos asesoramiento especializado y gestión completa de sus operaciones internacionales.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine className="text-white text-6xl mb-4" />
            <h3 className="text-2xl text-white font-semibold mb-2">Innovación y Eficiencia</h3>
            <p className="text-gray-300">Creemos en la importancia de la innovación y la eficiencia para alcanzar el éxito en el mercado global.</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            Vielcomex es una empresa dedicada a ofrecer soluciones integrales en comercio exterior, 
            ayudando a su negocio a expandirse globalmente. Con años de experiencia en el sector, 
            proporcionamos asesoramiento especializado y gestión completa de sus operaciones internacionales.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Nuestro compromiso es brindar un servicio personalizado y de alta calidad, adaptado a las 
            necesidades específicas de cada cliente. En Vielcomex, creemos en la importancia de la 
            innovación y la eficiencia para alcanzar el éxito en el mercado global.
          </p>
          <p className="text-lg text-gray-300">
            Contáctenos hoy para descubrir cómo podemos ayudar a su negocio a crecer y prosperar en el 
            competitivo mundo del comercio exterior.
          </p>
        </div>
      </div>
    </section>
  );
}
