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
  
  updateHandler = (targetele, value) => {
    targetele !== 'blob' && (targetele=targetele.getAttribute('name'));
    this.setState({
      [targetele]: value
    })
  } 

  updateSubmit = () => {
    console.log(this.state);
    if (this.state.blob !== '' || this.state.answer !== '') 
    {
      alert('RESPONSE CAPTURED \nAnswer : ' + this.state.answer+'\nAudio Url :' + this.state.blob)
      this.setState({
        blob: '',
        answer: '',
        isRecording: false 
      })
      this.id = Math.floor(Math.random() * 10) + 1;
    }
    else {
      alert('\n Kindly!!! Enter Answer')
    }
     
  }
  
  render() {
    return (
      <div className="App">
        
        <Question id={this.id}/>
        <QuestionImage id={this.id} />
        <Answer value={this.state.answer} answerHandler={this.updateHandler} />
        <Recording recordingHandler={this.updateHandler} isRecording={this.state.isRecording} blob={this.state.blob} />
        <button className="submitFrame" onClick={this.updateSubmit} disabled={this.state.isRecording}><span><b>SUBMIT</b></span> </button>

      </div>
    )
  }
}

export default App

