import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {

  render() {
    return (
      <div style={{height:"40vh", width:"40vw", marginLeft:"30vw"}}>
      <Carousel width="100%"  infiniteLoop
                showThumbs="false"
                autoPlay="true"
                transitionTime="500"
                >
        <div>
          <img src="http://www.fillmurray.com/400/300" />

        </div>
        <div>
          <img src="http://www.fillmurray.com/400/300" />

        </div>
        <div>
          <img src="http://www.fillmurray.com/400/200" />

        </div>
      </Carousel>
      </div>
    );
  }
}

export default Slider
