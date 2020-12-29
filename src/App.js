
import './App.css';
import Title from './title';
import Body from "./body";
import SubmitForm from "./submitform";
import {useState} from "react"

function App() {
  const [todos ,setTodos] = useState(["1", "2", "3",'4']);

  function addTodo(_){
    console.log(_)
    var newTodos = [...todos, _];
    setTodos(newTodos)
  } 
  
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Body todos={todos}/>
        <SubmitForm addTodo= {(e) => addTodo(e)}/>
      </header>
    </div>
  );
}

export default App;
