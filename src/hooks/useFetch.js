import { useEffect, useState } from "react"
import { fetchApi } from "../utils/fetchApi"


export const useFetch = (endpoint, method, datos) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        isError: false
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
            isError: false
        })

        try {

            const resp = await fetchApi(endpoint, method, datos)
            const data = await resp.json()

            setState({
                data,
                isLoading: false,
                isError: false,
            })
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                isError: true,
            })
            console.log(error)
        }


    }

    useEffect(() => {

        getFetch()

    }, [endpoint])


    return {
        ...state
    }
}
