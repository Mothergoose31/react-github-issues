import React from 'react'



const Issue = props =>{
    let issue = props.issues.find((issue) => {
        return issue.id === parseInt(props.match.params.id);
    })
    return(
        <p>{issue.title}</p>
    )


}


export default Issue;