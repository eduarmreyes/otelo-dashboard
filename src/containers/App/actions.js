/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CREATE_CLIENT,
  CREATE_CLIENT_SUCCESS,
  CREATE_CLIENT_ERROR,
} from './constants';



/**
 * CreateClient the input field of the form
 *
 * @param  {name} name The new text of the input field
 * @param  {email} email The new text of the input field
 * @param  {birthday} birthday The new text of the input field
 *
 * @return {object}    An action object with a type of CREATE_CLIENT
 */
export const createClient = (values) => ({
  type: CREATE_CLIENT,
  payload: values,
});

