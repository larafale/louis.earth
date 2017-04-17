
import { createActions } from 'redux-actions'
import { combineEpics } from 'redux-observable'

export const actions = createActions('PING', 'PONG')


export const epics = combineEpics(

  (action$, store) => action$.ofType('PING')
    .delay(1000)
    .mapTo({ type: 'PONG' })


, (action$, store) => action$.ofType('PONG')
    .delay(2000)
    .mapTo({ type: 'PING' })


)


