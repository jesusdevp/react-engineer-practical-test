import { Redirect, Route, Switch } from "react-router-dom"
import { Home } from "../components/Home"


export const AppRouter = () => {
    return (
        <>
            <Switch  >
                <Route exact path='/home' component={Home} />
            </Switch>

            <Redirect to='/home' />
        </>
    )
}
