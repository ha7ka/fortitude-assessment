import { UPDATE_DATA, UPDATE_DATA_ERROR, SET_DATA_LOADING} from '../types';

const initialState = {
    loading : true,
    data : [],
    error: null,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA_LOADING : 
            return {
                ...state,
                data: [],
                loading : true
            }
        case UPDATE_DATA:
            return { 
                ...state,  
                data : action.payload, 
                loading : false,
                error: null
            }
        case UPDATE_DATA_ERROR:
            return { 
                ...state, 
                error: action.payload, 
                loading : false,
            }
        default:
            return state
    }

}

export default reducer;