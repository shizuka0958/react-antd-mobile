import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import logo from './logo.svg';

import './App.css';
import './Appless.less'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Icon type="success" size="lg"/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">This is a button</Button>
      </div>
    );
  }
}

export default App;
