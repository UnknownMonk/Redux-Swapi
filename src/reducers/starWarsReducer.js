import { FETCHING, SUCCESS, FAILURE } from '../actions';
const initialState = {
  characters: [],
  error: '',
  loading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, loading: true, characters: [], error: '' };
    case SUCCESS:
      return { ...state, loading: false, characters: action.payload };
    case FAILURE:
      return {
        ...state,
        loading: false,
        characters: [],
        error: action.payload
      };

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
