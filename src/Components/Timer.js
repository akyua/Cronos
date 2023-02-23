import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';

const mainColor = '#6F1AB6';

const Timer = () => {
    return(
        <div>
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                textColor: '#fff',
                pathColor: mainColor,
                trailColor: 'rgba(255, 255, 255, .2)',

            })}/>
            <div id='button'>
                <PlayButton />
                <PauseButton />
            </div>
            <div id='settings'>
                <SettingsButton />
            </div>
        </div>
    );
}

export default Timer;