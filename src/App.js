import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import "fullpage.js/vendors/scrolloverflow";
import './App.css';
import Header from './components/header.js';
import About from './components/about.js';
import Portfolio from './components/portfolio.js';
import $ from "jquery";

const anchors = ["Accueil", "Présentation", "Portfolio"];

const App=() => (


  <ReactFullpage
  anchors={anchors}
  navigation
  navigationTooltips={anchors}
  scrollOverflow={true}
  scrollingSpeed = {700}

  onLeave={ (origin, destination, direction) => {
    if(destination.index == 1 ){
      $(".progress-bar").addClass("scale-in-hor-left");
    } else if (origin.index == 1){
      $(".progress-bar").removeClass("scale-in-hor-left");
    }
  }}

  render={({ state, fullpageApi }) => {
      return (
          <ReactFullpage.Wrapper>
              <div className="section ">
                  <Header />
              </div>
              <div className="section ">
                  <About />
              </div>
              <div className="section ">
                  <Portfolio />
              </div>
          </ReactFullpage.Wrapper>
      )
  }}
  />
);


export default App;

