import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  root
)

reportWebVitals()
