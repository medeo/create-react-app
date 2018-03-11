import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configureStore, history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { injectGlobal, ThemeProvider } from 'styled-components'

import theme from './theme'

injectGlobal`
  // place the font-faces here
  body {
    margin: 0; 
  }
`

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)