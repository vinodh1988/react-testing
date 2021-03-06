import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {state}from './Redux/mappings/mapping';

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {peopleRead} from './Redux/actions/peopleAction';

import {Provider} from 'react-redux';

const store=createStore(state,applyMiddleware(thunk));
store.dispatch(peopleRead());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
