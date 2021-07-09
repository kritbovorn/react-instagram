import React from 'react';
import User from '../User/User';

class Suggestions extends React.Component {

    state = {
        users: null
    }

    async componentDidMount() {
        const urlString = 'https://jsonplaceholder.typicode.com/users';
        const resp = await fetch(urlString);
        const users = await resp.json();

        this.setState({ users });
    }

    render() {

        const { users } = this.state;

        return (
            <div>
                {
                    users && users.map(({...user}) => <User key={ user.id } { ...user} />)
                }
            </div>
        );
    }
}

export default Suggestions;