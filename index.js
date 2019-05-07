import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Welcome from './Welcome';
// import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sathish',
      myname:'GGS'
    };
  }

  render() {
    return (
      <div>
        
        <Welcome myname={this.state.myname} name={this.state.name}/>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
