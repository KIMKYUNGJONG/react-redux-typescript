import React from 'react';
import { Store } from './Store';
import { toggleFavAction } from './Actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

export default function Favs(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props = {
    episodes: state.favorite,
    store: { state, dispatch },
    toggleFavAction,
    favorite: state.favorite,
  };
  return (
    <React.Suspense fallback={<div>...loading</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}
