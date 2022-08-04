import { types } from "../types"

export const banksLoaded = (banks) => {

    localStorage.setItem('banks', JSON.stringify(banks))

    const banksStorage = JSON.parse(localStorage.getItem('banks'))


    return {
        type: types.banksLoaded,
        payload: banksStorage ? banksStorage : banks
    }
}