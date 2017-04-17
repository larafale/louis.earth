import React, { Component } from 'react' // eslint-disable-line
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../actions'
import Rx from 'rxjs'

// css
import '../assets/app.css'


import Menu from './Menu'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = { w: window.innerWidth, h: window.innerHeight }
  }

  componentDidMount() {
    Rx.Observable.fromEvent(window, 'resize')
      .debounceTime(1000)
      .subscribe(()=>this.setState({ w: window.innerWidth, h: window.innerHeight }))
  }

  render() {

    // const { actions } = this.props

    return (<div className="root-node">

      <Menu />

      <div id="wrapper">
        {this.props.children}
      </div>
      
    </div>)
  }
}


export default connect(
  (state) => ({

  }),
  (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })
)(App)


