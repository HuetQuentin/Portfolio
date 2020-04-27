import React from 'react';
import '../styles/header.scss';
import '../styles/about.scss';
import Name from '../img/nameheader.png'
import ScrollAnimation from 'react-animate-on-scroll';

function Header()  {
      return (
        <div className="bg-header">
          <div className="text-header">
        	<img src={Name}></img>
        	<p id="title">Développeuse Web et graphiste </p>
          </div>
        </div>
      );
}


export default Header;

