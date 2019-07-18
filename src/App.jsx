import React from 'react';
import Home from './Home'
import axios from 'axios'
import Issues from './Issues'
import Issue from './Issue'
import './App.css';




import {
  BrowserRouter as Router,
  Route,
  Link
}
from 'react-router-dom'



class App extends React.Component {
  constructor(props){
    super(props); 
    this.state={
      issues:[]
    }   
}

componentDidMount() {
  axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(result => {
      console.log(result)
      this.setState({
        issues: result.data
      })
    })
}
  render(){
    return(
      <Router>
          <header className='header'role='banner'>
              <div id='imgcontainer'> 
                <img src='github.svg.png' alt ='icon'></img>
                <nav>
                  
                  <Link to='/'>Home </Link>{''}
                </nav>
              </div>
          </header>
          <Route exact path='/' component={Home}/>
          <Route exact path='/issues' render={()=> <Issues  issues={this.state.issues} />} />
          <Route exact path='/issues/:id' render={(props)=> <Issue  {...props} issues ={this.state.issues} />} />
      </Router>
    )
  }
}
export default App;