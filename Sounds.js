import useSound from 'use-sound';
import Rain from './cityrain.mp3';
import Button from './Button';
import { useState } from 'react';

//var isPlaying = false;

const Sounds = ({title}) => {
    const [play, { stop }] = useSound(Rain);
    const [playSound, setPlaySound] = useState(false)
    
    const getPlay = () => {
        const image = "rainycity.jpeg";
        document.body.style.backgroundImage = "url("+ image +")";
        play();
        //isPlaying = !isPlaying;
        return;
        
    }
    const onButtonClick = () => {
        playSound ? play() : stop()
    }
    return (
        <div className = 'headerSoundBox'>
            <center><h1>{title}</h1></center>
            <button className = 'btnRain'  onClick={() => 
            {
                setPlaySound(!playSound)
                onButtonClick();
            }
            } >City Rain</button>
            
        </div>
    )
}

export default Sounds

