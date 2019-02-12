import React, { Component } from 'react';
import albumData from './../data/albums.js';
import { Link } from 'react-router-dom';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { albums: albumData };
  }

  render(){
    return(
      <section className="library">
        {
          this.state.albums.map( (album, index) =>
            <section className="album-container">
            <Link className="album-image"
                  to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover}
                   alt={album.title} />
            </Link>
              <div className="song-info">
                <div className="album-title">{album.title}</div>
                <div className="album-artist">{album.artist}</div>
                <div className="album-song-count">{album.songs.length} songs</div>
              </div>

            </section>
          )
        }
      </section>
    );
  }
}


export default Library;
