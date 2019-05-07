import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Welcome from './Welcome';
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
        <Hello name={this.state.name} />

        <Welcome myname={this.state.myname} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
