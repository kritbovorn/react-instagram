import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/instagram.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Explore } from '../../assets/explore.svg';
import './Header.css';


const Header = ({ history, isLogged }) => {

    const handleClick = () => {
        history.push('/');
        isLogged(false);
    }

    return (
        <nav>
            <div className='div-header'>

                <div style={{width: '30px', display: 'grid', alignContent: 'center'}} onClick={() => history.push('/')}>
                    <Logo />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px', justifyContent: 'end',  justifyItems: 'center'}}>

                    <NavLink exact to='/' activeClassName='active'><Home className='div-svg' /></NavLink>
                    <NavLink exact to='/explore' activeClassName='active'><Explore className='div-svg' /></NavLink>

                    <button className='button-header' onClick={ handleClick }>Log Out</button>

                </div>

            </div>
        </nav>
    );
}

export default withRouter(Header);