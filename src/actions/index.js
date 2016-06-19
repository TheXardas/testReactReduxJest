import * as types from '../constants/ActionTypes';

export function setSelectValue(select) {
  return {
    type: types.SET_SELECT_VALUE,
    select
  };
}
