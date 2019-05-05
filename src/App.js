import React, { Component } from 'react';
import './index.css'
import EpicMenu from './EpicMenu'

import logo from './logo.png';

class App extends Component {
  render() {
    let links = [
      { label : 'Home' , link: '#home', active:true},
      { label : 'About' , link: '#about'},
      { label : 'Portfolio' , link: '#portfolio'},
      { label : 'Contacts-us' , link: '#contacts-us'}
    ];
    return (
    
       <div className="container center">

<EpicMenu links={links} logo={logo}/>
     <article id="#home"> 
     sdfbsdfb
     </article>
    </div>
     
    );
  }
}

export default App;
