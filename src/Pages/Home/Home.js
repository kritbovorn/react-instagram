import React from 'react';
import Header from '../../Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore';

const Home = () => {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path='/' component={ NewHome } />
                <Route exact path='/explore' component= { Explore } />
            </Switch>
        </div>
    )
}



export default Home;