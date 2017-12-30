import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/sign-up'>Sign up</Link>
          </nav>
          <h1>Blocitoff</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/sign-up" component={Signup} />
        </main>
      </div>
    );
  }
}

export default App;
