import React from 'react';
import '../styles/main.css';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="w-full h-64 md:w-1/3 sm:w-1/2 xl:w-1/4 p-6 flex flex-col mt-16 cursor-pointer">
      <img className="grow shadow-lg" src={product.img} alt={product.nombre} />
      <div className="pt-3 flex items-center justify-between">
        <p className="">{product.nombre}</p>
        <button
          type="button"
          className="bg-green"
          onClick={handleAddToCart(product)}
        >
          <i className="fas fa-plus-circle text-black outline-none  border-none  no-underline select-none "></i>
        </button>
      </div>
      <p className="pt-1">{`S/${product.Price}`}</p>
    </div>
  );
};

export default Product;
