import { types } from "../types"


const initialState = {
    banks: []
}

export const banksReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.banksLoaded:
            return {
                ...state,
                banks: [...action.payload]
            }


        default:
            return state
    }


}
