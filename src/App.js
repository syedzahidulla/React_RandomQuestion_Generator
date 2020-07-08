import React, { Component } from 'react'
import './App.css';
import Question from './Components/Question';
import QuestionImage from './Components/QuestionImage';
import Recording from './Components/Recording';
import Answer from './Components/Answer';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blob: '',
      answer: '',
      isRecording: false 
    } 
    this.id = Math.floor(Math.random() * 10) + 1;
  }  
  
  updateHandler = (name, value) => {
    this.setState({
      [name]: value
    })
  } 

  updateSubmit = () => {
    console.log(this.state);
    (this.state.blob !=='' || this.state.answer !== '') && alert('Submitted');
    this.setState({
      blob: '',
      answer: '',
      isRecording: false 
    })
    this.id = Math.floor(Math.random() * 10) + 1;
  }
  
  render() {
    return (
      <div className="App">
        
        <Question id={this.id}/>
        <QuestionImage id={this.id} />
        <Answer value={this.state.answer} answerHandler={this.updateHandler} />
        <Recording recordingHandler={this.updateHandler} isRecording={this.state.isRecording} blob={this.state.blob} />
        <div >
          <button className="submitFrame" onClick={this.updateSubmit} disabled={this.state.isRecording}>Submit </button>
        </div>

      </div>
    )
  }
}

export default App

