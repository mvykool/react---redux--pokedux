import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux'
import { logger } from './middleware/index'
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux'
import './index.css'

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
