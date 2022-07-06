import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import { store } from './store';
import { Provider } from 'react-redux';

import { JournalApp } from './JournalApp'
import './styles.css'
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
)
