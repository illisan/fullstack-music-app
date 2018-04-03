import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SongsList from './SongsList/SongsList';
//import SongDetails from './SongDetails/SongDetails';
import Controls from './Controls/Controls'
//import { Icon } from 'semantic-ui-react'
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


  // componentDidUpdate() { //saving state of play/pause  prev/next functionality.
  //   //this.audioPlayer.load()
  //   //if (this.state.playing) this.audioPlayer.play()
  //   //else this.audioPlayer.pause()
  // }

  playAudio = () => {
    this.audioPlayer.load();
    this.audioPlayer.play();
  }

  pauseAudio = () => {
    this.audioPlayer.pause();
  }

  selectSongId = (songId) => {
    this.setState ({ 
      currentSong: songId, playing: true }, 
      this.playAudio
    );
  }

  eventHandler =(e) => {
    switch (e.target.id) {
      case 'play':
      this.setState((state, props) => {
        let currentSong = state.currentSong
        if (currentSong === 0) {
          currentSong === 1
        }
        return {
          playing: true,
          currentSong :currentSong
        }
      }, this.playAudio)
      break
      case 'pause':
      this.setState ({
        playing :false},
        this.pauseAudio
      )
      break 
      case 'prev':
      this.setState((state, props) => {
        let currentSong= state.currentSong -1 
        if (currentSong <= 0) {
          return null
        } else {
          return {
            playing: true,
            currentSong : currentSong
          }
        }
      }, this.playAudio)
      break
      case 'next': 
      this.setState((state, props) => {
        let currentSong = this.currentSong +1
        if(currentSong >= this.songs.length) {
          return null
        } else {
          return{
            playing: true,
            currentSong : currentSong
          }
        }
      },this.playAudio)
      break 
      default:
      break
    }
  }

 

//   playAudio = (index) => {
//     this.audioPlayer.load()
//     this.audioPlayer.play()
//     console.log('playing?')
//     this.setState({
//       currentSong: index,
//       playing: !this.state.playing
//     })
//   }

//   pauseAudio= (index) => {
//     this.audioPlayer.pause()
//     this.setState({
//       currentSong:index,
//       playing: this.state.playing
//     })
//   }

//  changeAudio= (index, state) => {
//   if (this.state.playing && this.state.currentSong === state.currentSong){
//     this.playAudio(index)
//   } else {
//     this.pauseAudio(index)
//   }
//  }

//   changeSong = (index) => {
//     console.log(index)
//     this.setState({
//       currentSong: index,
//     })

//   }


  render() {
    return (
      <div className="opening">
        {this.state.songs.length > 0 &&
          <div>

            <audio ref={(self) => { this.audioPlayer = self }}>
              <source src={this.state.songs[this.state.currentSong].source} />
            </audio>

            {/* <div className="player">
              <h4 className="playerTitle"> Currently Playing:
              <span className="playerTitle child"> {this.state.songs[this.state.currentSong].title}</span>
              </h4>
              <div className="buttons">
                <a type="button" onClick={
                  () => { this.changeSong(this.state.currentSong - 1) }}>
                  <Icon disabled={this.state.currentSong === 0} name="fast backward" size="huge" />
                </a>
                <button onClick={this.changeAudio}>play</button>

                <a type="button" onClick={
                  () => this.playAudio(this.state.currentSong)}>
                  {this.state.playing ? <Icon name="pause" size="huge" /> : <Icon name="play" size="huge" />}
                </a>

                <a type="button" onClick={
                  () => { this.changeSong(this.state.currentSong + 1) }}>
                  <Icon disabled={this.state.currentSong === this.state.songs.length - 1} name="fast forward" size="huge" />
                </a>

              </div>
            </div> */}

            <Switch>
              <Route exact path="/" render={() =>
                <SongsList
                  songs={this.state.songs}
                  // playAudio={this.playAudio}
                  currentSong={this.state.currentSong}
                  selectSongId={this.selectSongId}
                  // playing={this.state.playing}
                />} />
            <Route exact path="/controls" render={() =>
              <Controls
                songs={this.state.songs}
                // playAudio={this.playAudio}
                // currentSong={this.state.currentSong}
                // selectSongId={this.selectSongId}
                playing={this.state.playing}
                onClick={this.eventHandler}
              />} />

              {/* <Route path='/:songId' render={(props) =>
                <SongDetails songs={this.state.songs}
                  currentSong={this.state.currentSong}
                  playAudio={this.playAudio}
                  playing={this.state.playing}
                  {...props}

                />} /> */}
            </Switch>
          </div>
        }
      </div>
    );
  }
}

export default App;
