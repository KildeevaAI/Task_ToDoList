import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import SecondPage from './SecondPage.js';

ReactDOM.render(
  <Router>
      <Switch>
            <Route  path='/home' component={Todo} />
            <Route  path='/Second' component={SecondPage} />
            <Redirect from='/' to='/home'/>
          </Switch>
          </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
