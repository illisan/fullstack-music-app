const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.argv[2] || 8081

app.use((req, res, next) => {  // CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

 
function Song(source, title, description, id) {  //APP data constructor
    this.source = source;
    this.title = title;
    this.description = description;
    this.id = id;
}

const songs = [ //App data
    new Song('/upstep.mp3', 'Upstep', 'Brutal beat and bulky bass are the foundation for a dubstep frenzy featuring synths, wailing guitar and jitters and glitches. Tempo: 140bpm', 0),
    new Song('/olympian.mp3', 'Olympian', 'An energetic, vibrant track featuring positive electric guitar licks and modern drums creates useful sports theme. Tempo: 130bpm', 1),
    new Song('/transmission.mp3', 'Transmission', 'Energetic electronic melody featuring modern drums, snaking bass and explosive electric guitar. Tempo: 120bpm', 2)
]


app.get('/getsongs', (req, res) => {  //requesting to send songs to front end, this connects with axios request on frontend.
    res.send(songs)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})