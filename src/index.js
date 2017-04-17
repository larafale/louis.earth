import React, { Component } from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'
import 'rxjs' // place before Store
import { Provider } from 'react-redux'
import Store from './store'
import Router from './router'

// common libs & css
import 'react-fastclick'
import './assets/helper.css'

const Seed = () => {
  console.log('app init')
  return (
    <Provider store={Store} >
      {Router}
    </Provider>
  )
}

ReactDOM.render(
  <Seed />,
  document.getElementById('root')
)
