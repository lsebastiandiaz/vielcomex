import Image from 'next/image';
import perfilOne from '../../public/perfilone.jpg'

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
              <Image 
                src={perfilOne}
                alt="John Doe" 
                width={100} 
                height={100} 
              />
            </div>
            <p className="text-xl text-gray-300 mb-4">
              "Vielcomex ha transformado nuestra forma de hacer negocios internacionales. Su equipo es profesional y eficiente."
            </p>
            <div className="text-center">
              <p className="text-lg font-bold text-white">John Doe</p>
              <p className="text-gray-400">CEO, ExampleCorp</p>
            </div>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
              <Image 
                src={perfilOne}
                alt="Jane Smith" 
                width={100} 
                height={100} 
              />
            </div>
            <p className="text-xl text-gray-300 mb-4">
              "Gracias a Vielcomex, hemos logrado expandir nuestras operaciones a nuevos mercados con facilidad y confianza."
            </p>
            <div className="text-center">
              <p className="text-lg font-bold text-white">Jane Smith</p>
              <p className="text-gray-400">COO, SampleCo</p>
            </div>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
              <Image 
                src={perfilOne}
                alt="Emily Johnson" 
                width={100} 
                height={100} 
              />
            </div>
            <p className="text-xl text-gray-300 mb-4">
              "El equipo de Vielcomex nos ha proporcionado un servicio excepcional y ha superado nuestras expectativas en todo momento."
            </p>
            <div className="text-center">
              <p className="text-lg font-bold text-white">Emily Johnson</p>
              <p className="text-gray-400">Managing Director, GlobalBiz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
