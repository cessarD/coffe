import React from "react"
import Menu from "../Menu"
import {Helmet} from "react-helmet";
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

    `}</style>
    </Helmet>
    <Menu />

  </>
}
