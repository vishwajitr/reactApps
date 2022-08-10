import React from 'react'
import { render } from 'react-dom'
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducer from './reducer'

const store = configureStore({
  reducer
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
