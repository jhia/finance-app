import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import './assets/theme.css';
import App from './App';
import Auth, { useAuth } from './Auth';
import * as serviceWorker from './serviceWorker';

import {AuthManager} from './util';

const authManager = new AuthManager();

function Root() {
  const isAuth = useAuth(authManager);
  if (isAuth) return (
      <App authManager={authManager} />
  )
  return (
    <Auth authManager={authManager} />
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
