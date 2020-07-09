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
            <button className={record ? "stoprecording" : "startrecording"} type="button" name="isRecording" onClick={(e) => props.recordingHandler(e.target, !record)}>{record === false ? <div><i className="fa fa-circle" aria-hidden="true" name="isRecording"></i> <b name="isRecording"> RECORD</b></div>  : <div name="isRecording"><i className="fa fa-circle-o-notch fa-spin" name="isRecording" ></i> <b name="isRecording"> STOP</b></div>}</button>
        </div>
    )
}

export default Recording
