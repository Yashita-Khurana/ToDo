import React , {useState , useEffect} from 'react';
import './App.css';
import Todo from './todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase' ;
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed

  useEffect 
  ( () => {
     db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
       setTodos(snapshot.docs.map(doc => doc.data().Task))
     } )
      //this code right here....fires when the app.js is loaded
  }, []);

  //function that will fire off when we click the button
  const addTodo = (event) => {
    event.preventDefault(); //this would prevent refreshing the page each time the button acts on type=submit as default i.e. it refreshed the page which we don't want
    db.collection('todos').add({
      Task : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); //empty the input field after task gets added
  }
  return (
    <div className="App">

      <h1>Hello there 🙋‍♀️!</h1>
      <form>

   <FormControl>
     <InputLabel>✅ Write a Todo</InputLabel>
     <Input  value={input}  onChange={event => setInput(event.target.value)}/>
   </FormControl>

      <Button disabled={!input} onClick={addTodo} variant="contained" color="primary" type="submit" >
          Add Task</Button>
      
      </form>
      <ul>
        {todos.map(todo =>(
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
