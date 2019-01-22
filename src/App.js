import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
          <div className="game-frame col-md-6">
            <p>
              .....#........$.......<br/>
              .....#........$.......<br/>
              .....@........$.......<br/>
            </p>
          </div>
      </div>
    );
  }
}

export default App;
