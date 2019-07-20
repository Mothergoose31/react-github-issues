import React from 'react'

const Issue = props =>{
    let issue = props.issues.find((issue) => {
        return issue.id === parseInt(props.match.params.id);
    })
    return(
        <div>
        <p>{issue.title}</p>
        <p>{issue.html_url}</p>
        </div>
    )
}
export default Issue;