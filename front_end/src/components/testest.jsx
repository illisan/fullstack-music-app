import React, { Component } from 'react';

class SongDetails extends Component {
    constructor(props) {
        super(props)
        //console.log(props)
        this.state = {
            song: props.currentSong
        }
    }

    render() {
        console.log(this.state.song)
        console.log(this.props)
        console.log(this.props.match.params)
        let songs = this.props.songs
        let song = this.state.song
        return (
            <div>
                <h1>{songs[song].title}</h1>
                <h3>{songs[song].description}</h3>
                <button onClick={() => { this.props.playAudio(songs[song].id) }}>{this.props.playing ? 'Pause' : 'Play'}</button>
            </div>
        )
    }
}

export default SongDetails;