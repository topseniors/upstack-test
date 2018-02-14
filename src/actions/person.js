/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */

import { ADD_PERSON, ADD_DUMMY_PERSONS } from '../constants';

export function addPerson({
  first_name,
  last_name,
  email,
  gender,
  ip_address,
}) {
  return {
    type: ADD_PERSON,
    payload: {
      first_name,
      last_name,
      email,
      gender,
      ip_address,
    },
  };
}

export function addDummyPersons(persons) {
  return {
    type: ADD_DUMMY_PERSONS,
    payload: persons,
  };
}
