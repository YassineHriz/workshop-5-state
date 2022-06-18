import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
class App extends React.Component {
  
  state={
    fullName:"Amir",
    profession:"Singer",
    bio:"Cool Guy",
    imgSrc:"https://images.omerlocdn.com/resize?url=https%3A%2F%2Fgcm.omerlocdn.com%2Fproduction%2Fglobal%2Ffiles%2Fimage%2Fa12e6e85-200c-4dd3-a8a2-525e8bd74c23.png&width=1024&type=jpeg&stripmeta=true",
    display:false
  };
  toggleBtn = () =>
  {
    this.state.display ? this.setState({display:false}) : this.setState({display:true})
  }
  render() {
    return(
      <div className="App">
        <Button variant="success" onClick={this.toggleBtn}>Click Here</Button>
        {this.state.display ? <div className="Profile"> 
          <div className='info'>
            <h1>{this.state.fullName}</h1>
            <h3>{this.state.profession}</h3>
            <p>{this.state.bio}</p>
          </div>
          <img src={this.state.imgSrc} width="200px" height="auto" alt=""></img>
        </div> : <Spinner animation="border" variant="secondary" className='Spinner'/>}
      </div>
    )
  }
}

export default App;
