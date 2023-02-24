import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';

const mainColor = '#6F1AB6';

const Timer = () => {
    const settingsInfo = useContext(SettingsContext);
    const [isPaused, setIsPaused] = useState(false);
    const [mode, setMode] = useState('work');
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function tick(){
        secondsLeftRef.current--; 
        setSecondsLeft(secondsLeftRef.current);
    }



    useEffect(() => {
        function switchMode() {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

            setMode(nextMode);
            modeRef.current = nextMode;

            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
          }
      
          secondsLeftRef.current = settingsInfo.workMinutes * 60;
          setSecondsLeft(secondsLeftRef.current);
        const interval = setInterval(() => {
            if(isPausedRef.current) {
                return;
            }
            if(secondsLeftRef.current === 0){
                return switchMode();
            }
            tick();
        }, 1000);


        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = mode === 'work' 
    ? settingsInfo.workMinutes * 60 
    : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if(seconds < 10) seconds = '0'+seconds;

    return(
        <div>
            <CircularProgressbar 
            value={percentage} 
            text={minutes + ':' + seconds} 
            styles={buildStyles({
                textColor: '#fff',
                pathColor: mainColor,
                trailColor: 'rgba(255, 255, 255, .2)',

            })}/>
            <div id='button'>
                {isPaused ? <PlayButton /> : <PauseButton />}
            </div>
            <div id='settings'>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)}/>
            </div>
        </div>
    );
}

export default Timer;