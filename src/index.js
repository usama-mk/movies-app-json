import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Booking from './booking';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import UpcomingApp from './UpcomingApp';

const store = createStore(allReducers)
const routing = (
  <Router basename='/'>
    <Provider store={store}>
      <Route exact path='/' component={App} />
      <Route path='/booking' component={Booking} />
      <Route path='/upcomingmovies' component={UpcomingApp} />
    </Provider>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
