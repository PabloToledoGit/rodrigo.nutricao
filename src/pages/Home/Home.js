import React from "react";
import "./Home.css";
import Titulo from "../../components/titulo/titulo.js";
import Header from "../../components/header/header.js";
import rodrigoPng from "../../img/rodrigo.png";
import Icons from "../../components/icons/icons.js";
import InstagramIcone from "../../img/instagram.png";
import WhatsappIcone from "../../img/whatsapp.png";
import Localizacao from "../../img/localizacao.png";
import Agende from "../../components/agende/agende.js";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="divmeio">
        <img className="imagemrodrigo" src={rodrigoPng} alt="Imagem do Rodrigo" />
        <div className="divicone">
          <Icons
            className="fotoicone"
            foto={InstagramIcone}
            link="https://www.instagram.com/nutri.rodrigomarinho/"
          />
          <Icons className="fotoicone" foto={WhatsappIcone} />
          <Icons className="fotoicone" foto={Localizacao} />
        </div>
      </div>
      <div className="divmeio2">
        <Titulo />
      </div>
      <Agende />
    </div>
  );
}
export default Home;
