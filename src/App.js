import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing.js';
import Library from './components/Library.js';
import Album from './components/Album.js';

class App extends Component {
  render() {
    return (
      <div className ="App">
        <header>
          <nav>
            <h1>Bloc Jams</h1>
            <Link className="link-item" to='/'>Home</Link>
            <Link className="link-item" to='/library'>Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
