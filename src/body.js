function Body(props) {

    return (<ul>
        {props.todos.map((e) => (<li key={e}>{e}</li>))}
    </ul>)
}

export default Body;