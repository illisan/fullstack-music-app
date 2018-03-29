import React, { Component } from 'react';
// import { Icon } from 'semantic-ui-react'

class Controls extends Component {

    render() {


        let songs = this.props.songs
        let song = this.props.match.params

        return (
            <div>
                <h2>Title: {songs[song.songId].title}</h2>
                <a onClick={() => { this.props.playAudio([song.songId]) }}>
                    {this.props.playing ? <Icon name="pause" size="huge" /> : <Icon name="play" size="huge" />}
                </a>
                <p className="description">{songs[song.songId].description}</p>
            </div>
        )
    }
}

export default Controls; 