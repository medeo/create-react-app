import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore, history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'

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
        <StyledDiv>
          <p>Hello <strong>Medeo</strong></p>
        </StyledDiv>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)


const StyledDiv =  styled.div`
  display: flex;
  width: 100vm;
  height:  100vh;
  align-items: center;
  justify-content: center;
`;
