import React, { Component } from 'react';

class PlayerBar extends Component {
  render(){
    return(
      <section className="player-bar">
        <section id="buttons">
      
          <button id="previous">
            <span className="icon ion-md-rewind"></span>
          </button>
          
          <button id="play-pause">
            <span className="icon ion-md-play"></span>
            <span className="icon ion-md-pause"></span>
          </button>
      
          <button id="next">
            <span className="icon ion-md-fastforward"></span>
          </button>
      
          <button id="time-control">
            <div className="current-time">-:--</div>
            <input type="range" className="seek-bar" value="0" />
            <div className="total-time">-:--</div>
          </button>
      
          <button id="volume-control">
            <div className="icon ion-volume-low"></div>
            <input type="range" className="seek-bar" value="80" />
            <div className="icon ion-volume-high"></div>
      
          </button>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
