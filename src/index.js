import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-keeper';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route  path="/App" loadComponent={(cb) => {
                    import('./App').then((module) => {
                        const app = module.default;
                        cb(app);
                    })
                } }/>

             <Route index path="/Login" loadComponent={(cb) => {
                    import('./views/login/').then(({view}) => {
                        cb(view);
                    })
                } }/>
        </div>
    </HashRouter>


    , document.getElementById('root'));

registerServiceWorker();
