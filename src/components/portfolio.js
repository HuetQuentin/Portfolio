import React from 'react';
import '../styles/portfolio.scss';
import Neon from '../img/neonh.png'
import Doyouknow from '../img/accueilh.png'
import Contact from '../img/contacth.png'
import Accueil from '../img/accueil2h.png'
import Metallurgy from '../img/mettalurgyh.png'
import Inscription from '../img/inscriptionh.png'

function Portfolio()  {
      return (
        <div className="bg-portfolio">
          <div className="container-portfolio">

            <div className="box-div1">
              <a href="https://dribbble.com/Mathilde1505" target="_blank">
                <img src={Neon}></img>
              </a>
            </div>

            <div className="box-div2">
              <a href="https://doyouknow.envertlaplanete.fr/" target="_blank">
                <img src={Doyouknow}></img>
              </a>
            </div>

            <div className="box-div3">
              <a href="https://dribbble.com/Mathilde1505" target="_blank">
                  <img src={Contact}></img>
              </a>
            </div>

            <div className="box-div4">
              <a href="https://dribbble.com/Mathilde1505" target="_blank">
                <img src={Accueil}></img>
              </a>
            </div>

            <div className="box-div5">
              <a href="https://dribbble.com/Mathilde1505" target="_blank">
                <img src={Metallurgy}></img>
              </a>
            </div>
  
            <div className="box-div6">
              <a href="https://doyouknow.envertlaplanete.fr/inscription.php" target="_blank">
                  <img src={Inscription}></img>
              </a>
            </div>
              
          </div>
      </div>
      );
}


export default Portfolio;


