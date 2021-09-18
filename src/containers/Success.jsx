import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
//import useGoogleAddress from '../hooks/useGoogleAddress'

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  // const address = useGoogleAddress(buyer[0].address)
  const defaultCenter = {
    lat: -7.2225139,
    lng: -79.4304801,
  };

  return (
    <div className="my-25 w-1/2 m-auto">
      <h1 className="font-bold text-lg">
        {`${buyer[0].name}, gracias por tu compra, tu pedido llegará a esta dirección`}{' '}
      </h1>
      <div className="mt-6">
        <Map />
      </div>
    </div>
  );
};

export default Success;
