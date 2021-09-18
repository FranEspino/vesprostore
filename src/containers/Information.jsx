import { Link, useHistory } from 'react-router-dom';
import React, { useRef, useContext } from 'react';
import AppContext from '../context/AppContext';
const Information = () => {
  const history = useHistory();

  const { state, addToBuyer } = useContext(AppContext);
  const form_data = useRef(null);
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form_data.current);
    const buyer_info = {
      name: formData.get('nombre'),
      email: formData.get('correo'),
      address: formData.get('direccion'),
      cp: formData.get('codigopostal'),
      phone: formData.get('telefono'),
      city: formData.get('ciudad'),
    };
    console.log(buyer_info);
    addToBuyer(buyer_info);
    history.push('/checkout/payment');
  };

  return (
    <div className=" m-8  pt-24 pb-16  md:flex md:justify-center md:flex-row sm:flex sm:flex-col-reverse sm:justify-center  ">
      <div className="md:w-1/2 sm:w-full mr-4 sm:mb-8">
        <h3 className="text-xl font-bold ">Información de envio</h3>
        <form className="mt-4" ref={form_data}>
          <div className="mb-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombres Completos"
              className="w-full px-3 py-2 placeholder-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="correo"
              placeholder="Correo Electrónico"
              className="w-full px-3 py-2 placeholder-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              className="w-full px-3 py-2 placeholder-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="codigopostal"
              placeholder="Código Postal"
              className="w-full px-3 py-2 placeholder-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              className="w-full px-3 py-2 placeholder-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              className="w-full px-3 py-2 placeholder-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <nav className="flex justify-between">
            <Link to="/checkout">
              <button className="text-white mt-4 font-bold bg-green-500 rounded py-1 px-4 cursor-pointer hover:bg-green-700">
                Regresar
              </button>
            </Link>
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white mt-4 font-bold bg-green-500 rounded py-1 px-4 cursor-pointer hover:bg-green-700"
            >
              Pagar
            </button>
          </nav>
        </form>
      </div>

      <div className="md:ml-4 mt-8">
        <h4 className="font-bold text-green-900 text-lg ">Lista de pedidos</h4>
        {cart.map((item) => (
          <div className="flex justify-between border-b-2 border-gray-300">
            <span className="md:mr-16 sm:mr-8 mt-4 mb-2">{item.nombre}</span>
            <p className="md:ml-16 sm:ml-8 mt-4">{`S/ ${item.Price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
