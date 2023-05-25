import { useState} from 'react'

function DisplayIdeas (props){
    return(
        <div>
            
            {props.ideas.map((idea, i)=>(
                <p key={i}>{idea}</p>
            ))}
        </div>
    )
}

export default DisplayIdeas 