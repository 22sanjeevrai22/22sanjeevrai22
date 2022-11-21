import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
                                        
return <Todos/>;

}

function Todos(){

     const [todolist, setTodoList] = useState([])
    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos")
        const jsonData = await data.json()
        setTodoList(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const onAddTodo = (todo) => {
        console.log('Parent todo', todo)
        setTodoList((prev)=>[todo, ...prev])

    }

    const onCancel = () => {
        setTodoList((_) => [])
    }
    
    const deleteTodo = (index) => {
        // const updatedTodos = todolist.filter((todo, tid) => {
        //     return tid !== index;
        // } ) 
        // setTodoList((_) => updatedTodos)
        console.log(index)
        console.log('why does this go in a loop')

        //Another method
        // let reducedTodo = [...todolist]
        // reducedTodo.splice(index)
        // setTodoList(reducedTodo)

    }
    

   
return(

        <div className='todo-card'>

        <TodoTitle/>
        
        <AddTodo onAddTodo = {onAddTodo}/>
        
        {todolist.length <= 0 ? 'Loading' : <TodoList todos = {todolist} deleteTodo={deleteTodo}/>}
    

        <TodoFooter onCancel = {onCancel}/>

        </div>    
);

}


function TodoTitle(){
    return(
        <div className='title'>
        <h1>To-Do-List</h1>
        </div>
    )
}

function AddTodo({onAddTodo}){

    const[todo, setTodo] = useState('');
    const handleTodo =(event)=>{
        const todoValue = event.target.value;

    setTodo((_) => todoValue)
    }

    const handleTodoAdd = () =>{
        onAddTodo(todo)
        setTodo((prev)=>'')
    }
    
    
    return(
        <div className='input'>
            <input type='text' placeholder='What will you do next?' onChange={handleTodo} value={todo}></input>
            <button onClick = {handleTodoAdd}>+</button>
        </div>
    )
}

function TodoList({todos, deleteTodo}){

  const handleDeleteTodo = (index) => {
    deleteTodo(index)

    }
    
   
    return(
        <div id='one'>
            {
            todos.map((todo) => (
                <>
                <AtomicTodoList todo={todo} key ={todo.id}/>
                <button onClick={handleDeleteTodo(todo.id)} className='btn'>-</button>
                
                
                </>
             )) 
            }
        </div>
    );
}

//Making atomic Components
function AtomicTodoList({todo}){
  
    
    return(
        <div className ='oneTodo' key={todo.id}>{todo.title}</div>

    )
}


function TodoFooter({onCancel}){

    return(
        <div className='footer'>
            <div className='pending-task' id='one'>
                You have 3 pending task.
            </div>

            
            <div>
                <button className='btn' onClick={onCancel}>Clear all</button>
            </div>

        </div>
    )
}



export default App;

 