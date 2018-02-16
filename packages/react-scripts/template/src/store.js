// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

export const history = createHistory()

export const configureStore = (initialState?: {}) => {
  // Redux Configuration
  const middleware = []
  const enhancers = []

  // saga Middleware
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  })

  // Skip redux logs in console during the tests
  if (
    process.env.NODE_ENV !== 'test' ||
    process.env.NODE_ENV !== 'production'
  ) {
    middleware.push(logger)
  }

  // Router Middleware
  const router = routerMiddleware(history)
  middleware.push(router)

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware))
  const enhancer = compose(...enhancers)

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
    ) // eslint-disable-line global-require
  }

  sagaMiddleware.run(rootSaga)

  return store
}
