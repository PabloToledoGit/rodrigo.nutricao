import "./App.css";
import React from "react";
import "./reset.css";
import Titulo from "./components/titulo/titulo.js";
import Header from "./components/header/header.js";
import "./rodrigo.svg";
import rodrigoSvg from "./rodrigo.svg";
import Icons from "./components/icons/icons.js";
import InstagramIcone from "./instagram.png";
import WhatsappIcone from "./whatsapp.png";
import Localizacao from "./localizacao.png";
import Logo from "./logorodrigo.png";

function App() {
  return (
    <div className="App">
      <div className="divlogo">
        <img className="imagemlogo" src={Logo} alt="*" style={{ width: "8rem", height: "8rem" }} />
        <Header />
      </div>
      <div className="divmeio">
        <Titulo />
        <img className="imagemrodrigo" src={rodrigoSvg} alt="" />
        <div className="divicone">
          <Icons className="fotoicone" foto={InstagramIcone} />
          <Icons className="fotoicone" foto={WhatsappIcone} />
          <Icons className="fotoicone" foto={Localizacao} />
        </div>
      </div>
    </div>
  );
}

export default App;
