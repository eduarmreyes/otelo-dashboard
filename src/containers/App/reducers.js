/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS, Map } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  CREATE_CLIENT,
  CREATE_CLIENT_ERROR,
  CREATE_CLIENT_SUCCESS,
  LOGIN,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  LOAD_SESSION,
  CLEAR_SESSION,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  security: {
    authentication: {
      authenticated: false,
    },
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case CREATE_CLIENT:
      return state
    case CREATE_CLIENT_ERROR:
      return state
    case CREATE_CLIENT_SUCCESS:
      return state
    case LOGIN:
      return state;
    case CHANGE_USERNAME:
      return state;
    case CHANGE_PASSWORD:
      return state;
    case LOAD_SESSION:
      return state.setIn(['security', 'authentication'], Map({ ...action.payload, authenticated: true }));
    case CLEAR_SESSION:
      return state.setIn(['security', 'authentication'], Map({ authenticated: false }));
    default:
      return state;
  }
}

export default appReducer;
