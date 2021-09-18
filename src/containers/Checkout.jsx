import React, { useContext } from 'react';
import '../styles/main.css';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { state, removeToCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeToCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      parseFloat(accumulator) + parseFloat(currentValue.Price);
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="container pt-24 pb-16 md:w-1/2 m-auto sm: w-5/6">
      <div className="mt-20">
        <h2 className="text-2xl font-bold">Detalle de compra</h2>
      </div>

      <div className="flex justify-between mt-6 py-6 ">
        <div>
          {cart.length > 0 ? (
            <h4 className="font-bold text-green-900 text-lg">
              Lista de pedidos
            </h4>
          ) : (
            <h4 className="font-bold text-green-900 text-lg">
              Carrito vacio :S
            </h4>
          )}
          {cart.map((item) => (
            <div className="flex justify-between border-b-2 border-gray-300">
              <span className="md:mr-16 sm:mr-8 mt-4 mb-2">{item.nombre}</span>
              <p className="md:ml-16 sm:ml-8 mt-4">{`S/ ${item.Price}`}</p>
              <button
                type="button"
                onClick={handleRemove(item)}
                className=" outline-none  select-none border-none  no-underline	 mt-4 ml-8  "
              >
                <i className="fas fa-trash-alt text-red-500 outline-none  border-none  no-underline select-none "></i>
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="flex  flex-col">
            <h4 className="font-bold md:text-lg sm:text-base">{` Precio Total: S/ ${handleSumTotal()}`}</h4>
            <Link to="/checkout/information">
              <button className="text-white mt-4 font-bold bg-green-500 rounded py-1 px-4 cursor-pointer hover:bg-green-700">
                Confirmar
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
