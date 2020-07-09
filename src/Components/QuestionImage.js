import React from 'react'
import questions from './Questionbank'

function QuestionImage(props) {
    var image;
    questions.forEach((data) => {
        if (data.id ===props.id )
         image=data.imageurl 
    })

    return (
        <div>
             <img className="imageComponent" src={image} alt="Sample pic for the question will go here"/>
        </div>
    )
}
export default QuestionImage
