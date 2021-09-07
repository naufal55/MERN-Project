import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateBlog from '../create-blog'
import DetailBlog from '../detail-blog'
import Home from '../home'
import { Header, Footer } from '../../components'
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
                <Header/>
            <div className="content-wrapper">
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
            </div>
                <Footer/>
        </div>
    )
}

export default MainApp
