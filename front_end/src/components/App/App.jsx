import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SongsList from './SongsList/SongsList';
import SongDetails from './SongDetails/SongDetails';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentSong: 0,
      playing: false,
    }
  }

  componentDidUpdate() {
    this.audioPlayer.load()
    if (this.state.playing) this.audioPlayer.play()
    //If we were playing in the previous state, then we should pause
    else this.audioPlayer.pause()
  }

  playAudio = (index) => {
    console.log('playing?')
    //  if (!this.state.playing) {
    //   //  this.audioPlayer.load()
    //   //  this.audioPlayer.play()
    //  } else {
    //    this.audioPlayer.pause()
    //  }
    this.setState({
      currentSong: index,
      playing: !this.state.playing
    })
  }


  changeSong = (index) => {
    console.log(index)
    this.setState({
      currentSong: index,
      // playing: !this.state.playing
      // }, () => {
      //   this.audioPlayer.load()
      //   this.audioPlayer.play()
    })

  }


  render() {
    console.log(this.props.songs)
    return (
      <div className="App">
        <audio ref={(self) => { this.audioPlayer = self }}>
          <source src={this.props.songs[this.state.currentSong].source} />
        </audio>

        <button type="button" onClick={() => this.playAudio(this.state.currentSong)}> {this.state.playing ? 'Pause' : 'Play'} </button>

        <button type="button" onClick={() => { this.changeSong(this.state.currentSong - 1) }}
          disabled={this.state.currentSong === 0}>Prev
        </button>

        <button type="button" ref={(self) => { this.btnNext = self }} onClick={() => { this.changeSong(this.state.currentSong + 1) }}
          disabled={this.state.currentSong === this.props.songs.length - 1}> Next
        </button>

        <h3> Currently playing: {this.props.songs[this.state.currentSong].title}</h3>

        <Route exact path="/" render={() =>
          <SongsList
            songs={this.props.songs}
            playAudio={this.playAudio}
            currentSong={this.state.currentSong}
            playing={this.state.playing}
          />} />

        <Route path='/:songId' render={(props) =>
          <SongDetails songs={this.props.songs}
            currentSong={this.state.currentSong}
            playAudio={this.playAudio}
            playing={this.state.playing}
            {...props}

          />} />
      </div>
    );
  }
}

export default App;
