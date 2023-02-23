import ReactSlider from 'react-slider';
import './slider.css';

const Settings = () => {
    return(
        <div style={{textAlign:'left'}}>
            <label>Work Minutes:</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={45}
                min={1}
                max={120}
            />
            <label>Break Minutes:</label>
            <ReactSlider
                className={'slider break'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={45}
                min={1}
                max={120}
            />
        </div>
    );
}

export default Settings;