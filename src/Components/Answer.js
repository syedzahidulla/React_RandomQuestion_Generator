import React from 'react'

function Answer(props) {
    var onAnswer = (e) => {
        props.answerHandler(e.target.name,e.target.value)
    }
    return (
        <div >
            <div>
                <label className="answerLabel"><b>ENTER ANSWER HERE:</b> </label>
            </div>
            
            <textarea name="answer" className="textarea" value={props.value} onChange={onAnswer} rows="6" cols="60" />
        </div>
    )
}

export default Answer