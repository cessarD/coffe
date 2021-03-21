import React from "react"
import Menu from "../Menu"
import {Helmet} from "react-helmet";
import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core"
export default function Productos() {

  var productos={
    "Tipos":["Coffee","Infusions","Desserts","Fresh Drinks","Relaxed Drinks","Appetizers","Paninis","Salads" ],
    "Menu": [
      {
        "Tipo": "Coffee",
        "Nombre": "Americano",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://elmejorcafe.info/wp-content/uploads/2019/06/coffee-cup-american-e1600797942495.jpg",
        "Precio": " $2.00 "
      },
      {
        "Tipo": "Coffee",
        "Nombre": "Capuccino",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://barismoallimite.files.wordpress.com/2012/09/capuchino.jpg",
        "Precio": " $2.50 "
      },
      {
        "Tipo": "Coffee",
        "Nombre": "Latte",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://st2.depositphotos.com/5355656/7824/i/600/depositphotos_78249960-stock-photo-hot-cafe-latte-and-coffee.jpg",
        "Precio": " $2.75 "
      },
      {
        "Tipo": "Coffee",
        "Nombre": "Frapuccino con caramelo",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://i.pinimg.com/originals/c6/c9/37/c6c9376c7b64cdc6b8a543eda83d746f.jpg",
        "Precio": " $3.50 "
      },
      {
        "Tipo": "Coffee",
        "Nombre": "Frapuccino con chocolate",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://algajo1.edublogs.org/files/2010/04/frapuccino1.jpg",
        "Precio": " $3.50 "
      },
      {
        "Tipo": "Coffee",
        "Nombre": "Cold Brew",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://media.revistagq.com/photos/5ca5fa81eccc6a581bd558eb/master/pass/cold_brew_cafe_694.jpg",
        "Precio": " $3.10 "
      },
      {
        "Tipo": "Coffee",
        "Nombre": "Espresso",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://dam.cocinafacil.com.mx/wp-content/uploads/2013/04/cafe-espresso.jpg",
        "Precio": " Sencillo $2.25 / Doble $2.75 "
      },
      {
        "Tipo": "Infusions",
        "Nombre": "Té Chai",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://www.eluniversal.com.mx/sites/default/files/2020/01/03/masala_chai_istock_el_universal_0.jpg",
        "Precio": " $3.25 "
      },
      {
        "Tipo": "Infusions",
        "Nombre": "Té Verde",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://i.blogs.es/9c9d2f/teverde/1366_2000.jpg",
        "Precio": " $2.25 "
      },
      {
        "Tipo": "Infusions",
        "Nombre": "Té de manzanilla",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/es-bueno-tomar-te-de-manzanilla.jpg",
        "Precio": " $2.10 "
      },
      {
        "Tipo": "Infusions",
        "Nombre": "Infusion Jenjibre y miel",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://img.vixdata.io/pd/jpg-large/es/sites/default/files/i/infusion-de-miel-y-jengibre-27242.jpg",
        "Precio": " $3.00 "
      },
      {
        "Tipo": "Desserts",
        "Nombre": "Crepa de nutella y fresas",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://i.pinimg.com/originals/d5/64/1a/d5641afeef7c765c2e2b2b0613a4cf9d.jpg",
        "Precio": " $3.75 "
      },
      {
        "Tipo": "Desserts",
        "Nombre": "Brownie",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://t2.rg.ltmcdn.com/es/images/4/7/3/img_brownie_casero_8374_600.jpg",
        "Precio": " $2.50 "
      },
      {
        "Tipo": "Desserts",
        "Nombre": "Quesadilla",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",

          "imagen":"https://www.recetassalvadorenas.com/wp-content/uploads/2014/03/quesadilla-salvadorena.jpg",
        "Precio": " $2.00 "
      },
      {
        "Tipo": "Desserts",
        "Nombre": "Banana Muffin",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://thenaturalnurturer.com/wp-content/uploads/2020/07/cinnamon-zucchini-banana-muffins-7-of-7-e1595992397207.jpg",
        "Precio": " $2.50 "
      },
      {
        "Tipo": "Desserts",
        "Nombre": "Chocolat Croissant",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://i.ytimg.com/vi/fMASA209R3s/maxresdefault.jpg",
        "Precio": " $3.00 "
      },
      {
        "Tipo": "Desserts",
        "Nombre": "Cheesecake",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2Farchive%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646",
        "Precio": " $4.25 "
      },
      {
        "Tipo": "Desserts",
        "Nombre": "Bagel con mermelada y Queso Crema",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"http://recetas.saboratomate.es/sites/default/files/comprar_online_tomate_sabor_gourmet_recetas_mermelada2.jpg?1354226253",
        "Precio": " $3.50 "
      },
      {
        "Tipo": "Fresh Drinks",
        "Nombre": "Gaseosa",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://elements-cover-images-0.imgix.net/b84180ba-b256-4256-bfc6-8e28e9926bf8?auto=compress%2Cformat&fit=max&w=632&s=3105ad7eabbb8d4a0dbf1cd90b346142",
        " Precio ": " $1.25 "
      },
      {
        "Tipo": "Fresh Drinks",
        "Nombre": "Botella de agua",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://comeronocomer.es/sites/default/files/styles/colorbox_grande/public/fotos/botellas_agua.jpg?itok=wPlnz0sg",
        "Precio": " $1.00 "
      },
      {
        "Tipo": "Fresh Drinks",
        "Nombre": "Agua mineral",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://www.consumer.es/wp-content/uploads/2019/07/img_tengo-hambre-o-sed-hd-1280x720.jpg",
        "Precio": " $1.25 "
      },
      {
        "Tipo": "Fresh Drinks",
        "Nombre": "Smothies Frutales",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2016/08/smoothiedefrutas.jpg",
        "Precio": " $3.50 "
      },
      {
        "Tipo": "Fresh Drinks",
        "Nombre": "Limonada con hierbabuena",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://lh3.googleusercontent.com/proxy/zpxG_yYEs59g5QC0vrcsQ5TFgHByybOg85LmSbXxcNJBtWcakhaRQycSNz4HKm4Wwl-j-NDp-ywsAd9PH_qMai4DSsT0fF_KK_rrgAlt9o2ySAQFtrASx4YPknZI-fZog-uZQ_dAM-pep40",
        "Precio": " $2.25 "
      },
      {
        "Tipo": "Fresh Drinks",
        "Nombre": "Limonada natural o con soda",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://www.vitamixespana.com/recetas/wp-content/uploads/2018/07/limonada-casera-con-batidora-Vitamix.jpg",
        "Precio": " $1.95 "
      },
      {
        "Tipo": "Fresh Drinks",
        "Nombre": "Naranjada natural o con soda",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://www.infobae.com/new-resizer/cRLQrVEn9Q3bQX_gJCBD1-yNB94=/1200x900/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/5WICAWTZ7ZB3XDSDWIDBSN4V7I.jpg",
        "Precio": " $1.95 "
      },
      {
        "Tipo": "Relaxed Drinks",
        "Nombre": "Vino Tinto",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://www.soyvida.com/__export/1588463231694/sites/debate/img/2020/05/02/vista-lateral-vino-tinto-botella-vidrio-uva-mesa-oscura-horizontal_176474-4123_crop1588463158357.jpg_423682103.jpg",
        "Precio": " Copa $3.50 / Botella $22.00 "
      },
      {
        "Tipo": "Relaxed Drinks",
        "Nombre": "Vino Rosa",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://static.vix.com/es/sites/default/files/imj/elgrancatador/C/Caracteristicas-de-un-buen-vino-rosado-1.jpg",
        "Precio": " Copa $3.00 / Botella $16.00 "
      },
      {
        "Tipo": "Relaxed Drinks",
        "Nombre": "Vino Blanco",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://imagenes.milenio.com/FdDezppEx1BenTzIMHmBHiXt7vs=/958x596/https://www.milenio.com/uploads/media/2019/09/30/vino-blanco.jpg",
        "Precio": " Copa $3.00 / Botella $18.00 "
      },
      {
        "Tipo": "Relaxed Drinks",
        "Nombre": "Copa de Sangria",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://www.comedera.com/wp-content/uploads/2020/12/cocktail-5590755_1280.jpg",
        "Precio": " $4.50 "
      },
      {
        "Tipo": "Relaxed Drinks",
        "Nombre": "Cerveza Artesanal Cadejo",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://www.lustermagazine.com/wp-content/uploads/2019/02/46846825_209708393163744_1589401144203586430_n-e1550247030964.jpg",
        "Precio": " $2.50 "
      },
      {
        "Tipo": "Appetizers",
        "Nombre": "Bruchetas de tomate, albahaca y queso",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://placeralplato.com/files/2015/08/caprese-bruschetta-640x480.jpg?width=1200&enable=upscale",
        "Precio": " $6.50 "
      },
      {
        "Tipo": "Appetizers",
        "Nombre": "Hongos al ajillo",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://lh3.googleusercontent.com/proxy/QoqeGbwETZYApCvNRf3yapDbShTDaQ-FKZdATFG5UpNXeDLpRjicIdvQEAyIiL8Nrknzazf_dywyBGF2n_vlNUtAOqu0NzJiGqQCzgqhIgxbsMSk1MHqS02OEALoeDHoQTJB1vzrmpTShPVlmh0",
        "Precio": " $6.50 "
      },
      {
        "Tipo": "Appetizers",
        "Nombre": "Panecillos con ajo",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://i.blogs.es/6630ad/pan-ajo/450_1000.jpg",
        "Precio": " $5.25 "
      },
      {
        "Tipo": "Appetizers",
        "Nombre": "Sandwichitos de la casa",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"https://www.appetizeraddiction.com/wp-content/uploads/2020/01/mini-sandwiches-picture.jpg",
        "Precio": " $6.00 "
      },
      {
        "Tipo": "Appetizers",
        "Nombre": "Tabla de jamon y quesos",
        "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales condimentum mauris, quis ornare arcu sodales quis. Morbi aliquet mi nibh, ac laoreet sem interdum eu. Nulla pretium, erat ut ornare tempus, nibh nunc lobortis risus, at iaculis risus felis eget purus. Phasellus id elementum risus. Nulla facilisi. Quisque egestas quam nunc, ut rutrum ante sollicitudin non. Ut ornare tortor eget turpis elementum, ut congue mauris condimentum. ",
        "imagen":"http://cocinaalchile.com/wp-content/uploads/2019/02/tabla1.jpg",
        "Precio": " $8.25 "
      },
      {
        "Tipo": "Paninis",
        "Nombre": "Favorito",
        "Descripcion": "Aguacate, pechuga de pollo, tomate, lechuga romana, aderezo cesar, queso fundido.",
        "imagen":"https://afm-6b83.kxcdn.com/wp-content/uploads/2018/08/Pic-806-Avocado-Tuna-and-Green-Apple-Panini-Final-low-1.jpg",
        "Precio": " $7.00 "
      },
      {
        "Tipo": "Paninis",
        "Nombre": "Iberico",
        "Descripcion": "Jamón virginia, queso fundido, hongos salteados, cebolla dorada y aderezo honey mustard.",
        "imagen":"https://d1ralsognjng37.cloudfront.net/98874c74-04f3-4aa6-b6f9-42eeb7872a29.jpeg",
        "Precio": " $8.00 "
      },
      {
        "Tipo": "Paninis",
        "Nombre": "Canadiense",
        "Descripcion": "Lomito de res, queso fundido, cebolla gratinada y mayonesa de la casa.",
        "imagen":"https://lh3.googleusercontent.com/proxy/KvCdL-6Sm4b5HC0adGwNj4nz6YD3DnqhtuU7dJROzvf_AmTEmKKfYYBZiH3xMO1CAb-0L2RL3S7kaiuv6vbxiQHt4cxzBMg29EJPpetCzBqQD2EeOhH1OCIp_RnnVRW211Z3Ng",
        "Precio": " $9.00 "
      },
      {
        "Tipo": "Salads",
        "Nombre": "La tropical",
        "Descripcion": "Pollo a la parrilla, queso cheddar, crutones, mezcla de lechugas, tomate, aguacate y semillas de marañon.",
        "imagen":"https://st2.depositphotos.com/2716431/6859/i/950/depositphotos_68590239-stock-photo-caesar-salad-with-grilled-chicken.jpg",
        "Precio": " $6.00 "
      },
      {
        "Tipo": "Salads",
        "Nombre": "La Italiana",
        "Descripcion": "Pollo a la parrilla, quinoa, espinaca, tomate, queso cheddar, chips de tortilla, maíz dulce y lechuga romana.",
        "imagen":"https://buenprovecho.hn/wp-content/uploads/2019/01/Pollo-con-ma%C3%ADz-1.jpg",
        "Precio": " $7.00 "
      },
      {
        "Tipo": "Salads",
        "Nombre": "La Romana",
        "Descripcion": "Pollo a la parrila, aguacate, tocino, huevo duro, tomate, espinaca, queso parmesano, chips de tortilla y lechuga romana",
        "imagen":"https://e0605b5e794e16b15e51-b25f5db3158ecf712705ad7a35f2aa8a.ssl.cf3.rackcdn.com/ensalada-cesar-con-pollo-a-la-plancha-80-1290-742-nw.jpg",
        "Precio": " $8.00 "
      }
    ]
  }
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,


    },
  });
  const classes = useStyles();
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Menu</title>
      <style type="text/css">{`
        body {
            background-color: gray;
            width:100%;
            margin:0
        }
      
        .MuiCardMedia-img {
   object-fit:fill
}
    `}</style>
    </Helmet>

    <Menu />
    <p>Menu de productos</p>
    {
      productos.Tipos.map(tipo =>{



      return <div>
        <h1>{tipo}</h1>
          <Grid container spacing={4}
                direction="row"
                justify="space-around"
                alignItems="center"
          >
            {productos.Menu.map(producto =>{
              if(producto.Tipo===tipo){
                return <>
                  <Grid item  s={12} sm={4} md={3} zeroMinWidth>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"

                          className={classes.media}
                          image={producto.imagen}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {producto.Nombre}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {producto.Descripcion}
                          </Typography>
                            <hr/>
                            <p>Precio: {producto.Precio}</p>
                        </CardContent>
                      </CardActionArea>

                    </Card>
                  </Grid>
                </>
              }

            })}
          </Grid>
      </div>
      }
      )
    }


  </>
}
