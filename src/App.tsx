import React from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick And Morty</h1>
          <p> pick your Fav Episode</p>
        </div>
        <div>
          <Link to="/">home</Link>
          <Link to="/favs">favorite: {state.favorite.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
