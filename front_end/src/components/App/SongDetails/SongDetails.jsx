import React, {Component} from 'react';

class SongDetails extends Component {

    render() {


        let songs = this.props.songs
        let song = this.props.match.params

        return (
            <div>
                <h2>Title: {songs[song.songId].title}</h2>
                <h3>{songs[song.songId].description}</h3>
                <button onClick={() => { this.props.playAudio([song.songId])}}>{this.props.playing ? 'Pause' : 'Play'}</button>
            </div>
        )
    }
}

export default SongDetails;