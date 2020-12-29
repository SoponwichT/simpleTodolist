import { useState } from 'react'

function SubmitForm(props) {

    const [temp, setTemp] = useState("")
    return (
        <div><input onChange={(e) => setTemp(e.target.value)} /> <button onClick={() => props.addTodo(temp)}>Add</button></div>
    )
}
export default SubmitForm