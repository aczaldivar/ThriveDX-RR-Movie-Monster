import {useState} from 'react'

function IdeasForm (props) {
    let [newIdea, setNewIdea] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.addIdeas(newIdea)
    }
    return (
     <form onSubmit = {handleSubmit}>
        <input type="text" onChange={(e) => setNewIdea(e.target.value)}/>
        <button type="submit">Submit you awesome idea!</button>
     </form>
    )
}

export default IdeasForm 