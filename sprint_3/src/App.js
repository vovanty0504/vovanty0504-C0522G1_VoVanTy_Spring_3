import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./compoment/Home";
import React from "react";

function App() {
    return (
        <div>
            {/*<Router>*/}
            {/*    <div className="container">*/}
            {/*        <nav className="navbar navbar-expand-lg navbar-light bg-light">*/}
            {/*            <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
            {/*                <ul className="navbar-nav mr-auto">*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <Link to={'/'} className="nav-link">Home</Link>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <Link to={'/create'} className="nav-link">Create</Link>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <Link to={'/home'} className="nav-link">Index</Link>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </nav> <br/>*/}
            {/*        <h2>Create app CRUD with ReactJs, NodeJs, MongoDB</h2> <br/>*/}
            {/*        <Switch>*/}
            {/*            <Route path='/home' component={ Home } />*/}
            {/*        </Switch>*/}
            {/*    </div>*/}
            {/*</Router>*/}
        </div>
    );
}

export default App;
