
import React from "react"

export default function Footer() {

//TODO cambiar el SRC
    return <>
      <div style={{display:"flex", "flex-direction":"row","align-items":"center","justify-content":"space-between"}}>
        <div>
      <h2>Encuentranos en redes sociales</h2>
          <div style={{display:"flex", "flex-direction":"row","align-items":"center","justify-content":"space-around"}}>
          <img src={`https://image.flaticon.com/icons/png/512/21/21155.png`} style={{width:"3vw",height:"5vh"}}/>
          <img src={`https://c0.klipartz.com/pngpicture/904/880/gratis-png-captura-de-pantalla-del-logotipo-de-instagram-iconos-de-computadora-del-logotipo-del-vino-blanco-negro-de-instagram.png`} style={{width:"3vw",height:"5vh"}}/>
          </div>
        </div>
        <h2>TE ESPERAMOS</h2>
      <img src={`../../imagenes/headbanner.png`} style={{width:"20%",height:"15vh"}}/>
      </div>
    </>


}