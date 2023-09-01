// import { useState } from 'react';
// // import { faPause } from '@fortawesome/free-solid-svg-icons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './App.css';
// import happyMusic from './assets/happy.mp3';
// import funnyMusic from './assets/funny.mp3';
// import birthdayMusic from './assets/birthday.mp3';

// import { PlayerControls } from './components/PlayerControls';
// import TrackList from './components/TrackList';
// import { MusicContext } from './contexts/MusicContext';



// function App() {

//   const [state, setState] = useState({
//     audioPlayer: new Audio(happyMusic),
//     tracks: [
//       {
//         name: "Happy Music",
//         file: happyMusic,
//       },
//       {
//         name: "Funny Music",
//         file: funnyMusic,
//       },
//       {
//         name: "Birthday Music",
//         file: birthdayMusic,
//       }
//     ],
//     currentTrackIndex: 0,
//     isPlaying: false,

//   })

//   console.log("State: ", state)

//   return (
//     <MusicContext.Provider value={[state, setState]}>
//       <div className="App">
//         {/* <FontAwesomeIcon icon={faPause} /> */}
//         <PlayerControls />
//         <TrackList />
//       </div>
//     </MusicContext.Provider>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
import happyMusic from './assets/happy.mp3';
import funnyMusic from './assets/funny.mp3';
import birthdayMusic from './assets/birthday.mp3';
import { PlayerControls } from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';



function App() {

  const [state, setState] = useState({
    audioPlayer: new Audio(happyMusic),
    tracks: [
      {
        name: "Happy Music",
        file: happyMusic,
      },
      {
        name: "Funny Music",
        file: funnyMusic,
      },
      {
        name: "Birthday Music",
        file: birthdayMusic,
      }
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  })

  console.log("State: ", state)

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
