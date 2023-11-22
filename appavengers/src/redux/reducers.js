// redux/reducers.js

import { combineReducers } from 'redux';
import {
  FETCH_ALL_DOCUMENTS_SUCCESS,
  FETCH_ALL_DOCUMENTS_FAILURE,
  FETCH_DATA_REQUEST,
  UPDATE_DATA,
} from './action';


const documentsReducer = (state = { allDocuments: [], error: null }, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ALL_DOCUMENTS_SUCCESS:
      return {
        ...state,
        loading: false,

        allDocuments: action.payload,
        error: null,
      };
    case FETCH_ALL_DOCUMENTS_FAILURE:
      return {
        ...state,
        loading: false,

        error: action.payload,
      };
    default:
      return state;
  }
};

const dataReducer = (state = { data: '' }, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload ,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  documents: documentsReducer,
  data: dataReducer,
});

export default rootReducer;
