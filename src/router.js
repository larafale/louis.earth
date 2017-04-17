import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'


import App from './components/App'
import Home from './components/Home'

const NotFound = () => (<h2>404.. sorry brother</h2>)

const ConfiguredRouter = 
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>


export default ConfiguredRouter
