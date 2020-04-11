/* eslint-disable indent */
import React from 'react';
import { IAction, IState } from './interfaces';

const initialState: IState = {
  episodes: [],
  favorite: [],
};
export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    // eslint-disable-next-line indent
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favorite: [...state.favorite, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favorite: action.payload };
    default:
      return state;
  }
}

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
