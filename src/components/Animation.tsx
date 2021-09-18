import Smoke from '../assets/smoke.json';
import React, { Component } from 'react';
import Lottie from 'react-lottie';
class Animation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Smoke,
    };

    return (
      <div className="w-full  bg-black sm:mt-16 md:mt-2">
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default Animation;
