import React from 'react';
import '../styles/about.scss';
import Download from '../img/download.png'
import { Progress } from 'semantic-ui-react'
import pdf from '../img/cv.pdf'



function About()  {
      return (

        <div className="bg-about">
            <div className="container">
                <div className="text-about">
                    <h1 >Présentation</h1>
                    <p id="test">Étudiante en école d’ingénieur, je me forme au <span>graphisme</span> et au <span>développement web</span> en parallèle de mes études. Je souhaite devenir développeuse nomade et voyager autour du monde pour concevoir vos projets</p>
                    <div className="download">
                        <h2>Télécharger mon CV</h2>
                        <div className="download-img">
                            <a href={pdf} target="_blank">
                                <img src={Download}></img>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="progress-bar">
                    <div className="progress-div">
                        <h3>HTML / CSS / SASS</h3>
                        <Progress percent={80} color='red' size='medium'/>
                    </div>
                    <div className="progress-div">
                        <h3>React / JSX</h3>
                        <Progress percent={20} color='red' size='medium'/>
                    </div>  
                    <div className="progress-div">
                        <h3>MySql / Php</h3>
                        <Progress percent={40} color='red' size='medium'/>
                    </div>  
                    <div className="progress-div">
                        <h3>Photoshop / Illustrator</h3>
                        <Progress percent={70} color='red' size='medium'/>
                    </div>  
                </div>
            </div>
        </div>

      );
}

export default About;


