import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import { Router, RouteComponentProps } from '@reach/router';
import Home from './Home';
import Favs from './Favs';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<Home />} path="/" />
        <RouterPage pageComponent={<Favs />} path="/favs" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
