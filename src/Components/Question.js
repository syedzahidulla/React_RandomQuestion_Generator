import React from 'react'
import '../App.css';
import questions from './Questionbank'
function Question(props) {
    var query;
    questions.forEach((data) => {
        if (data.id ===props.id )
         query=data.question 
    })

    return (
        <div className="question">
            <h2>{query}</h2>
        </div>
    )
}

export default Question
