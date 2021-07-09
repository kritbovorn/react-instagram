import React from 'react';
import { ReactComponent as User } from '../../assets/user.svg';
import './Profile.css';

const Profile = ({ location: { state: { username, email, name } }}) => {
    return (
        <div className='div-profile'>

            <div className='avatar'>
                <User />
            </div>
            <div className='profile-detail'>
                <div className='profile-detail-username'>{ username }</div>
                <div className='profile-detail-name'>{ name }</div>
                <div className='profile-detail-email'>{ email }</div>
            </div>
            
        </div>
    );
}

export default Profile;