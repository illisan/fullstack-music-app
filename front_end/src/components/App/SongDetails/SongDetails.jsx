import React, {Component} from 'react';

class SongDetails extends Component {
    // constructor(props) {
    //     super(props)
    //     //console.log(props)
    //     this.state = {
    //         song: props.currentSong
    //     }
    // }
   
    render() {

        console.log(this.props)
        console.log(this.props.match.params)
        console.log(this.props.songs)
        let songs = this.props.songs
        let song = this.props.match.params
        console.log(song.songId)
        return (
            <div>
                {/* <h1>SongId : {params.songId}</h1> */}
                <h2>Title: {songs[song.songId].title}</h2>
                <h3>{songs[song.songId].description}</h3>
                <button onClick={() => { this.props.playAudio([song.songId])}}>{this.props.playing ? 'Pause' : 'Play'}</button>
            </div>
        )
    }
}

export default SongDetails;