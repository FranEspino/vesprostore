import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-white relative pt-1 border-b-2 border-green-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                Marcas Aliadas
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Redes Sociales
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700 text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700 text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Atención al cliente
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  link 1
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-green-700 font-bold mb-2">
              © 2020 fraporitmos_tech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
