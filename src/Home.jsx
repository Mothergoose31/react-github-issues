import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
    render() {
        return(
            <>
                <div class='Message'>
                    <h3>👋Want to submit an issue to Bookface/Acre? </h3>
                    <h4>If you have a bug or idea please read the contributing guidelines</h4>
                    <Link to='/issues'>
                        <h4>Issues</h4>
                    </Link>
                </div>
            </>
            )
        }
}

export default Home;