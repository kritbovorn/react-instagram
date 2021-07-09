import React from 'react';
import './Feed.css';

const Feed = ({ author, download_url }) => {
    return (
        <div className='div-feed'>
            <div style={{ padding: '10px 5px', fontWeight: 'bold' }}>{ author }</div>
            <div style={{ width: '100%'}}>
                <img style={{ width: '100%' }} src={ download_url } alt='' />
            </div>
        </div>
    );
}

export default Feed;