import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Details from './Details'
import Main from './Main'
const Routes = () => {
    return (
        <>
            <Router>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route exact path="/:id"><Details/></Route>
            </Switch>
            </Router>
        </>
    )
}

export default Routes
