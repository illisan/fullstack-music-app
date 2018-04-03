import React, { Component } from 'react';
// import { Link, } from "react-router-dom"
import './SongList.css';
import { Icon } from 'semantic-ui-react'

class SongsList extends Component {
    render() {
        console.log(this.props.songs)
        let songsArr = this.props.songs
        console.log(this.props.currentSong)

        let songsJSX = songsArr.map((song, i) => {
            console.log(song)
            return <div key={song.id}>
            <div className="containter">
                <div className="songContent">
                <h2 className="songListTitle">{song.title}</h2>
                    {/* <h2 className="sonListTitle"><Link to={`/${song.id}`}>{song.title}</Link></h2> */}
                        <a onClick={() => { this.props.playAudio(song.id) }}>
                            {this.props.playing ? <Icon name="pause" size="huge" /> : <Icon name="play" size="huge"/>}
                        </a>
                     
                </div>
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