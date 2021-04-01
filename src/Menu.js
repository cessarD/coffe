import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useWindowSize from "./sizes"
import SwipeableTemporaryDrawer from "./Menulateral"
import { Link } from "gatsby"
export default function Menu() {
  const size = useWindowSize();
  function prueba(){
    return window.location.replace("/Productos")
  }

  if(size.width<=1100){

    return <>
    <SwipeableTemporaryDrawer/>
    </>
  }else{
    return <>
      <AppBar position="static" style={{width:"100%"}}>
        <Tabs aria-label="simple tabs example">
          <Tab component="a"  label={<Link to="/Productos">Menu</Link>} href="coffe/Productos"  />

          <Tab    label="Acerca De"  />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
    </>
  }

}
