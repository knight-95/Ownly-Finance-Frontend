// import { coming_soon,ConnectWallet,Footer2,tiktok,tweets } from './Desktop2'
import ConnectWallet from './components/desktop2/ConnectWallet'
import Tweets from './components/desktop2/Tweets';
import Tiktok from './components/desktop2/Tiktok';
import ComingSoon from './components/desktop2/Coming_soon';
import Footer2 from './components/desktop2/Footer2';
import React from "react";
import './Desktop2.css';
// import react-dom-render
const Desktop2 = () => {
  return (
    <div className='desktop2'>
      <div>
        <ConnectWallet/>
        <Tweets />
        <Tiktok />
        <ComingSoon />
        <Footer2 />
      </div>
    </div>
  );
};

export default Desktop2;
