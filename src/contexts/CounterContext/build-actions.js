import * as actionTypes from './action-types'; 

export const buildActions = (dispatch) => {
    return {
        increase: () => dispatch({type: actionTypes.INCREASE}),
        decrease: () => dispatch({type: actionTypes.DECREASE}),
        reset: () => dispatch({type: actionTypes.RESET}),
        setCounter: (payload) => dispatch({type: actionTypes.SET_COUNTER})
    }
}
