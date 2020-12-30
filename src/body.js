function Body(props) {

    function removeMe(word){
        console.log(word)
    }

    return (<ul>
        {props.todos.map((e) =>
        (
            <li key={e}>
                {e} &nbsp; &nbsp; &nbsp;
                <span onClick={()=> props.removeTodo(e)}>X</span>
            </li>
        )
        )}
    </ul>)
}

export default Body;