import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-keeper';
import { Provider } from 'react-redux'
import store from './store.js'
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route path="/app" loadComponent={(cb) => {
                    import('./App.js').then((module) => {
                        const app = module.default;
                        cb(app);
                    })
                }} />

                <Route index path="/login" loadComponent={(cb) => {
                    import('./views/login/').then(({ view }) => {
                        cb(view);
                    })
                }} />
            </div>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
