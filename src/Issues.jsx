import React from 'react'
import {
    BrowserRouter as Router,
    
    Link
}
from 'react-router-dom'

const Issues= props => (
<div className='App'>
    {props.issues.map((issue,i)=><Link key={i} to={issue.id}>{issue.title} </Link>)}

</div>
)
export default Issues;

