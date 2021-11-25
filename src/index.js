import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome';
import {
  faPlay,
  faStar,
  faSearch,
  faChevronUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faUser, faClock } from '@fortawesome/free-regular-svg-icons';
import { HashRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

library.add(faPlay, faStar, faSearch, faUser, faChevronUp, faClock, faCheck);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
