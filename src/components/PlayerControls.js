import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const PlayerControls = () => {
    const music = useMusicPlayer();

    return (
        <>
            <div>
                <p>{music.currentTrackName}</p>
            </div>
            <button>
                <FontAwesomeIcon
                    incon={faStepBackward}
                    onClick={music.playPreviousTrack}
                />
            </button>
            <button onClick={music.togglePlay}>
                {music.isPlaying ? (<FontAwesomeIcon incon={faPause} />) : (<FontAwesomeIcon incon={faPlay} />)}
            </button>
            <button>
                <FontAwesomeIcon
                    incon={faStepForward}
                    onClick={music.playNextTrack}
                />
            </button>
        </>
    )
}

export { PlayerControls };