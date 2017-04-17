import {createStore, applyMiddleware, compose} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { epics } from './actions'


const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(createEpicMiddleware(epics))
)(createStore)

const initialState = { counter: 1 }

export default finalCreateStore(reducers, initialState)