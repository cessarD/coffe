import React from "react"
import Menu from "../component/Menu"
import {Helmet} from "react-helmet";
import Slider from "../component/Slider"
import Header from "../component/Header"
import Footer from "../component/Footer"
import  {Grid} from "@material-ui/core"
import useWindowSize from "../sizes"
export default function Informacion() {
  const size = useWindowSize();
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Terra Gardens</title>
      <style type="text/css">{`
        body {
            background-color: gray;
            width:100%;
            margin:0
        }
 a{
        text-decoration:none;
        color:white}
    `}</style>
    </Helmet>
    <Header />
    <Menu />
    {size.width<=1100 ? info("column","column") : info("row","row-reverse")}




    <Footer/>
  </>
}

function info(position,position2){
  return  <div >

    <Grid container spacing={1}
          direction={position}
          justify="flex-start"
          alignItems="center"
          alignContent="center"

    >
      <Grid item  s={12} sm={4} md={4} zeroMinWidth>
        <p style={{textAlign:"center"}}>Hola</p>
      </Grid>
      <Grid item  s={12} sm={8} md={8} zeroMinWidth>
        <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum.</p>
      </Grid>
    </Grid>
    <Grid container spacing={1}
          direction={position2}
          justify="flex-start"
          alignItems="center"
          alignContent="center"

    >
      <Grid item  s={12} sm={4} md={4} zeroMinWidth>
        <p style={{textAlign:"center"}}>Hola</p>
      </Grid>
      <Grid item  s={12} sm={8} md={8} zeroMinWidth>
        <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum.</p>
      </Grid>


    </Grid>
    <Grid container spacing={1}
          direction={position}
          justify="flex-start"
          alignItems="center"
          alignContent="center"

    >
      <Grid item  s={12} sm={4} md={4} zeroMinWidth>
        <p style={{textAlign:"center"}}>Hola</p>
      </Grid>
      <Grid item  s={12} sm={8} md={8} zeroMinWidth>
        <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum.</p>
      </Grid>
    </Grid>
    <Grid container spacing={1}
          direction={position2}
          justify="flex-start"
          alignItems="center"
          alignContent="center"

    >
      <Grid item  s={12} sm={4} md={4} zeroMinWidth>
        <p style={{textAlign:"center"}}>Hola</p>
      </Grid>
      <Grid item  s={12} sm={8} md={8} zeroMinWidth>
        <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum.</p>
      </Grid>


    </Grid>
  </div>
}
