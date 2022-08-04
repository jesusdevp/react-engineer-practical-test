import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bankList } from '../data/data'
import { useFetch } from '../hooks/useFetch'
import { banksLoaded } from '../redux/actions/banksActions'
import { BanksContainer } from './BanksContainer'
import { Error } from './Error'
import { Loading } from './Loading'

export const Home = () => {


    const dispatch = useDispatch()
    const { data, isLoading, isError } = useFetch('b/5ea2fa3e98b3d5375233ca89')
    const { banks } = useSelector((state) => state.banks)


    useEffect(() => {
        // Lista ficticia
        // dispatch(banksLoaded(bankList))

        dispatch(banksLoaded(data ? data.record : []))

    }, [data])



    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row justify-content-center'>
                    {isLoading ? <Loading Loading={isLoading} /> : <BanksContainer banks={banks} />}
                    {isError && <Error />}
                </div>
            </div>

        </div>
    )
}
