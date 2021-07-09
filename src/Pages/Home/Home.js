import React from 'react';
import Header from '../../Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import NewHome from '../NewHome/NewHome';
import Explore from '../Explore/Explore';
import Profile from '../Profile/Profile';

const Home = ({ handleLogged }) => {
    return (
        <div>
            <Header isLogged={ handleLogged } />

            <Switch>
                <Route exact path='/' component={ NewHome } />
                <Route exact path='/explore' component= { Explore } />
                <Route path='/:username' component= { Profile } />
            </Switch>
        </div>
    );
}



export default Home;