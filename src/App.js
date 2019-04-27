import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import FaceRec from './components/FaceRec/FaceRec.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import './App.css';



const particlesOps = {

                params: {
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 30
                        },
                        url: 'path/to/svg.svg'
                    }
                }
}

const initialState = {
      input:'', 
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
              id: '',
              name: '',
              email: '',
              entries: 0,
              joined: ''
      }
}

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }


loadUser = (data) => {
  this.setState( {
        user: {
              id: data.id,
              name: data.name,
              email: data.email,
              entries: data.entries,
              joined: data.joined
  }})
}

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }


  displayFaceBox = (box) => {
    this.setState({box:box})
  }

onInputChange = (event) => {
  this.setState({input: event.target.value});
} 

onBottunSubmit = () => {
this.setState({imageUrl: this.state.input}); 

 fetch('https://guarded-depths-22127.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        input: this.state.input
      })
    })
 .then(response =>response.json())

  .then( response =>{
      if (response) {
      fetch('https://guarded-depths-22127.herokuapp.com/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        id: this.state.user.id
      })
    })

      .then(response =>response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, { entries: count}))
        
      })
      .catch(console.log)
  }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
  .catch(err => console.log(err));

}

onRouteChange = (route) =>{
  if (route === 'signout') {
    this.setState(initialState)
  } else if (route === 'home'){
    this.setState({isSignedIn: true})
  }
  this.setState({route: route});
}
  render() {
    const {isSignedIn, imageUrl, route, box, } = this.state;
  
    return (
      <div className="App">
      <Particles className='particles'
      params={particlesOps} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home'
          ? <div>
              <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onBottunSubmit={this.onBottunSubmit}

                />
                <FaceRec box={box} imageUrl={imageUrl}/>
            </div>
            : (
              route === 'signin' 
              ? <div>
            <Logo />
            <Signin  loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            </div>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>

              )
            
          }
      </div>
    );
  }
}

export default App;
