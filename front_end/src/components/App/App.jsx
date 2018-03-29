import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SongsList from './SongsList/SongsList';
import SongDetails from './SongDetails/SongDetails';
import Controls from './Controls/Controls'
import { Icon } from 'semantic-ui-react'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentSong: 0,
      playing: false,
      songs: [],
    }
  }


  componentDidMount() {   //axios request to pull data from backend.Data is pulled in form of an array.
    console.log(this.state.songs)

    axios.get(`http://localhost:8080/getsongs`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          songs: response.data
        })
      })
  }


  componentDidUpdate() { //saving state of play/pause  prev/next functionality.
    this.audioPlayer.load()
    if (this.state.playing) this.audioPlayer.play()
    else this.audioPlayer.pause()
  }


  playAudio = (index) => {
    console.log('playing?')
    this.setState({
      currentSong: index,
      playing: !this.state.playing
    })
  }



  changeSong = (index) => {
    console.log(index)
    this.setState({
      currentSong: index,
    })

  }


  render() {
    return (
      <div className="opening">
        {this.state.songs.length > 0 &&
          <div>

            <audio ref={(self) => { this.audioPlayer = self }}>
              <source src={this.state.songs[this.state.currentSong].source} />
            </audio>
            <div className="player">
              <h4 className="playerTitle"> Currently Playing:
              <span className="playerTitle child"> {this.state.songs[this.state.currentSong].title}</span>
              </h4>
              <div className="buttons">
                <a type="button" onClick={
                  () => { this.changeSong(this.state.currentSong - 1) }}>
                  <Icon disabled={this.state.currentSong === 0} name="fast backward" size="huge" />
                </a>

                <a type="button" onClick={
                  () => this.playAudio(this.state.currentSong)}>
                  {this.state.playing ? <Icon name="pause" size="huge" /> : <Icon name="play" size="huge" />}
                </a>

                <a type="button" onClick={
                  () => { this.changeSong(this.state.currentSong + 1) }}>
                  <Icon disabled={this.state.currentSong === this.state.songs.length - 1} name="fast forward" size="huge" />
                </a>

              </div>
            </div>
            <Switch>
              <Route exact path="/" render={() =>
                <SongsList
                  songs={this.state.songs}
                  playAudio={this.playAudio}
                  currentSong={this.state.currentSong}
                  playing={this.state.playing}
                />} />

              <Route path='/:songId' render={(props) =>
                <SongDetails songs={this.state.songs}
                  currentSong={this.state.currentSong}
                  playAudio={this.playAudio}
                  playing={this.state.playing}
                  {...props}

                />} />
            </Switch>
          </div>
        }
      </div>
    );
  }
}

export default App;
