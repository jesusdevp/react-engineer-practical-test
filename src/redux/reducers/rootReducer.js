import { combineReducers } from "redux";
import { banksReducer } from "./banksReducer";


export const rootReducer = combineReducers({
    banks: banksReducer,
})
