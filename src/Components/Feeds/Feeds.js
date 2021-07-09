import f from 'compose-function';
import React from 'react';
import Feed from '../Feed/Feed';

class Feeds extends React.Component {

    state = {
        feeds: null
    }

    async componentDidMount() {
        const urlString = 'https://picsum.photos/v2/list';
        const resp = await fetch(urlString);

        const feeds = await resp.json();

        this.setState({ feeds });
    }

    render() {

        const { feeds } = this.state;

        return (
            <div>
                {
                    feeds && feeds.map(({...f}) => <Feed key={ f.id } { ...f }/>)
                }
            </div>
        )
    }
}

export default Feeds;