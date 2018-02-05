import React from 'react';
import './header.css';
import Logo from '../images/jr-logo.png';

export default class ComponentHome extends React.Component {
  render () {
    return (
        <div className="App-header">
          <p><span>登录</span><span>注册</span></p>
          <img className="img-Logo" src={Logo} />
          <p>APP下载</p>
        </div>
      )
  }
}