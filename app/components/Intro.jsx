import Image from 'next/image';
import background from '../../public/background.jpg';

export default function Intro({ contactFormRef }) {
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src={background}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10">
        <div className="h-full flex items-center justify-start p-10">
          <div className="text-base max-w-lg space-y-6">
            <h1 className="text-6xl font-extrabold mb-2 text-white">Vielcomex</h1>
            <h2 className="text-4xl font-semibold mb-4 text-white">Servicios de Comercio Exterior</h2>
            <p className="text-xl mb-6 text-white">Ayudando a su negocio a expandirse globalmente.</p>
            <button 
              className="px-6 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-blue-700"
              onClick={scrollToContactForm}
            >
              Contáctenos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
