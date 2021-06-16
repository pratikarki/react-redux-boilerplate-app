import {
  FETCH_ALL_STREAMS, FETCH_ONE_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM 
} from '../actions/types';
import _ from 'lodash';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    
    case FETCH_ALL_STREAMS:
      const obj = {};
      action.payload.map(el => obj[el.id] = el);
      return { ...state, ...obj };

    case FETCH_ONE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}

export default streamReducer;