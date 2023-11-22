// redux/action.js

export const UPDATE_DATA = 'UPDATE_DATA';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_ALL_DOCUMENTS_SUCCESS = 'FETCH_ALL_DOCUMENTS_SUCCESS';
export const FETCH_ALL_DOCUMENTS_FAILURE = 'FETCH_ALL_DOCUMENTS_FAILURE';

export const updateData = (data) => {
  // Ensure 'data' is converted to a string before setting it as the payload
  const payloadData = typeof data === 'object' ? JSON.stringify(data) : data;

  return {
    type: UPDATE_DATA,
    payload: payloadData,
  };
};

