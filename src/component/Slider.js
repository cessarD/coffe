import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {

  render() {
    return (
      <div style={{height:"100%", width:"40vw", marginLeft:"30vw"}}>
      <Carousel width="100%"  infiniteLoop
                showThumbs="false"
                autoPlay="true"
                transitionTime="500"
                >
        <div>
          <img src="https://i.pinimg.com/564x/fa/02/cf/fa02cf1fa878a200b2726b89070f2a03.jpg" />

        </div>
        <div>
          <img src="https://i.pinimg.com/564x/e1/28/77/e1287702f9cfdb83028bf7a03eb05e35.jpg" />

        </div>
        <div>
          <img src="https://i.pinimg.com/originals/ab/c7/1d/abc71d367c8e88a20e21a0b1e9723f96.jpg" />

        </div>
        <div>
          <img src="https://i.pinimg.com/originals/3b/46/b9/3b46b9cb63be130d8f3dfb177a382f4c.jpg" />

        </div>
        <div>
          <img src="https://i.pinimg.com/564x/64/7e/64/647e647326067f8f6bc2810cdb64c801.jpg" />

        </div>
        <div>
          <img src="https://i.pinimg.com/564x/ce/7f/16/ce7f1646f40164235244d33711cf35eb.jpg" />

        </div>


      </Carousel>
      </div>
    );
  }
}

export default Slider
