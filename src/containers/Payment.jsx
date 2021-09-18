import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';

const Payment = () => {
  const history = useHistory();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'AdYsddmE60XbUVeCPDC30n8NunFVdm8qnlDhUGTiHGJriLo-knz5tOuY65PoihSmbh8QHFYhlpByP6nC',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handlePaymentSucccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      parseFloat(accumulator) + parseFloat(currentValue.Price);
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="m-auto w-1/2 flex-row  pt-24 pb-16  justify-center p-8">
      <h1 className="mt-32 font-bold text-lg">Resumen del pedido</h1>
      {cart.map((item) => (
        <div className="flex justify-between border-b-2 border-gray-300">
          <span className="md:mr-16 sm:mr-8 mt-4 mb-2">{item.nombre}</span>
          <p className="md:ml-16 sm:ml-8 mt-4">{`S/ ${item.Price}`}</p>
        </div>
      ))}

      <div className="mt-6">
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={handleSumTotal()} //monto de pago
          onPaymentStart={() => console.log('start payment')} //desencadenar acciones
          onPaymentSuccess={(data) => console.log(handlePaymentSucccess(data))}
          onPaymentError={(error) => console.log(error)}
          onPaymentCancel={(data) => console.log(data)}
        />
      </div>
    </div>
  );
};

export default Payment;
