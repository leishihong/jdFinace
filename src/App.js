import React, { Component } from 'react'
import ComponentHome from './Home/index'
import ComponentFooter from './Footer/footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentHome/>
        <div className="App-session"></div>
        <ComponentFooter/>
      </div>
    );
  }
}

export default App;
