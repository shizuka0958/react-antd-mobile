import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import { Route } from 'react-keeper'
import logo from './assets/img/logo.svg';
import './App.less';



class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Icon type="success" size="lg" />
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Button type="primary">This is a button</Button>
                <p>以下是二级路由切换页面</p>
                <div>
                    <Route index path="/stats" loadComponent={(cb) => {
                        import('./views/stats/').then(({ view }) => {
                            cb(view);
                        })
                    }} />
                    <Route path="/video" loadComponent={(cb) => {
                        import('./views/video/').then(({ view }) => {
                            cb(view);
                        })
                    }} />
                    <Route  path="/customer" loadComponent={(cb) => {
                        import('./views/customer/').then(({ view }) => {
                            cb(view);
                        })
                    }} />
                    <Route path="/mine" loadComponent={(cb) => {
                        import('./views/mine/').then(({ view }) => {
                            cb(view);
                        })
                    }} />

                </div>
            </div>
        );
    }
}

export default App;
