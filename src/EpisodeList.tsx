import React from 'react';
import { IEpisode } from './interfaces';

export default function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorite, store } = props;
  const { state, dispatch } = store;
  return episodes.map((episode: IEpisode) => {
    return (
      <section className="episode-box" key={episode.id}>
        <img
          src={episode.image ? episode.image.medium : null}
          alt={`Rick & Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favorite.find((fav: IEpisode) => fav.id === episode.id)
              ? 'UnFav'
              : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
}
