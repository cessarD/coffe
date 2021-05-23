import React from "react"
import Menu from "../component/Menu"
import {Helmet} from "react-helmet";
import Slider from "../component/Slider"
import Header from "../component/Header"
import  {Grid} from "@material-ui/core"
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import CloudIcon from '@material-ui/icons/Cloud';
import EcoIcon from '@material-ui/icons/Eco';
import StarRateIcon from '@material-ui/icons/StarRate';
import Footer from "../component/Footer"
export default function Home() {
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




      <Grid container spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="center"
            alignContent="center"

      >
        <Grid item  s={6} sm={4} md={3} zeroMinWidth>
          <p style={{textAlign:"center"}}><LocalCafeIcon></LocalCafeIcon><br></br>Cafe de estrica altura</p>
        </Grid>
        <Grid item  s={6} sm={4} md={3} zeroMinWidth>
          <p style={{textAlign:"center"}}><CloudIcon/><br/>Ambiente fresco y acogedor</p>
        </Grid>
        <Grid item  s={6} sm={4} md={3} zeroMinWidth>
          <p style={{textAlign:"center"}}><StarRateIcon/>
            <StarRateIcon/><StarRateIcon/>
            <StarRateIcon/><StarRateIcon/><br/>
          Productos de calidad</p>
        </Grid>
        <Grid item  s={6} sm={4} md={3} zeroMinWidth>
          <p style={{textAlign:"center"}}><EcoIcon/><br/>Cultura Eco Friendly</p>
        </Grid>



      </Grid>
  <div style={{display:"flex", "flex-direction":"column"}}>
    <Slider />
    <Footer/>
  </div>
  </>
}
