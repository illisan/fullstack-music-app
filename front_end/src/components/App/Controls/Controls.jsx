import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

class Controls extends Component {

    render() {

        return (
            <div>
                <div className="player">
                    <h4 className="playerTitle"> Currently Playing:
              <span className="playerTitle child"> {this.state.songs[this.state.currentSong].title}</span>
                    </h4>
                    <div className="buttons">
                        <a type="button" onClick={
                            () => { this.changeSong(this.state.currentSong - 1) }}>
                            <Icon disabled={this.state.currentSong === 0} name="fast backward" size="huge" />
                        </a>
                        <button onClick={this.changeAudio}>play</button>

                        {/* <a type="button" onClick={
                  () => this.playAudio(this.state.currentSong)}>
                  {this.state.playing ? <Icon name="pause" size="huge" /> : <Icon name="play" size="huge" />}
                </a> */}

                        <a type="button" onClick={
                            () => { this.changeSong(this.state.currentSong + 1) }}>
                            <Icon disabled={this.state.currentSong === this.state.songs.length - 1} name="fast forward" size="huge" />
                        </a>

                    </div>
                </div>
            </div>
        )
    }
}

export default Controls; 