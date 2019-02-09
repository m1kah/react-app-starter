import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import AppIndex from './components/app_index';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="h-100">
                <Navbar />
                <div className="container-fluid d-flex h-100">
                    <div className="row p-0 m-0 flex-nowrap h-100">
                        <Sidebar />
                        <div className="col-md-auto main">
                            <Switch>
                                <Route path="/" component={AppIndex} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#app'));
