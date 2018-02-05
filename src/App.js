import React, { Component } from 'react'
import ComponentHome from './Home/index'
import ComponentSession from './session/session'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <ComponentHome/>
        <ComponentSession/>
      </div>
    )
  }
}

export default App
