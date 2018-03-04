import React, { Component } from 'react';
import { Link, } from "react-router-dom"
import './SongList.css';

class SongsList extends Component {
    render() {
        console.log(this.props.songs)
        let songsArr = this.props.songs
        console.log(this.props.currentSong)

        let songsJSX = songsArr.map((song, i) => {
            console.log(song)
            return <div key={song.id}>
                <div className="songContent">
                    <h2 className="sonListTitle"><Link to={`/${song.id}`}>{song.title}</Link></h2>
                    <button onClick={() => { this.props.playAudio(song.id) }}>Play</button>
                </div>
            </div>
        })

        return (
            <div>
                {songsJSX}
            </div>
        )
    }
}

export default SongsList;