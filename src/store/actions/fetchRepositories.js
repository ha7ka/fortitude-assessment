import { UPDATE_DATA, UPDATE_DATA_ERROR, SET_DATA_LOADING} from '../types';

export const fetchRepositories = (API_URL) => {
    return async (dispatch) => {
        dispatch({ type: SET_DATA_LOADING });
        
        try {
            let res = await fetch(API_URL);
            let data = await res.json();

            return dispatch({
                type: UPDATE_DATA,
                payload: data
            })

        } catch (err) {
            dispatch({
                type : UPDATE_DATA_ERROR,
                payload : 'Error fetching From API'
            })
        }
    }

}
