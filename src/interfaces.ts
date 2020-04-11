/**
 * All the interfaces
 */

export type Dispatch = React.Dispatch<IAction>;
export interface IState {
  episodes: Array<IEpisode>;
  favorite: Array<IEpisode>;
}
export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}
export interface IEpisode {
  airdate: string;
  airtime: string;
  airstamp: string;
  id: number;
  image: { medium: string; original: string } | any;
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}
export interface IEpisodeProps {
  episodes: IEpisode[];
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
  favorite: Array<IEpisode>;
}
