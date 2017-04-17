import { handleActions } from 'redux-actions'

export default handleActions({

  PING: (state, action) => {
    console.log('PING')
    return state
  },
  PONG: (state, action) => {
    console.log('PONG')
    return state
  },

}, {})

