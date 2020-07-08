import React from 'react'
import { ReactMic } from 'react-mic';

function Recording(props) {

    var record = props.isRecording;
    var blob=props.blob;
    var onStop = (recordedBlob) => {
        blob = recordedBlob.blobURL;
        props.recordingHandler('blob',blob);
    }

    return (
        <div className="recording">
            <ReactMic
                name="blob"
                record={record}
                className="soundWave"
                onStop={onStop}
                strokeColor="black"
                backgroundColor="rgb(238, 233, 192)"
            />
            <audio className="audioFrame" src={blob} controls="controls"></audio>
            <button className={record ? "stoprecording" : "startrecording"} type="button" name="isRecording" onClick={(e) => props.recordingHandler(e.target.name, !record)}>{record === false ? "Start Recording" : "Stop Recording"}</button>

        </div>
    )
}

export default Recording
