import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateBlog from '../create-blog'
import DetailBlog from '../detail-blog'
import Home from '../home'
import Header from '../../components/Molecules/header'

const MainApp = () => {
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/create-blog">
                        <CreateBlog/>
                    </Route>
                    <Route path="/detail-blog">
                        <DetailBlog/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
            <p>footer</p>
        </div>
    )
}

export default MainApp
