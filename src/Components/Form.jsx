import {useState} from "react";
import styles from "./form.module.css";

export default function Form({todos,setTodos}){
const[todo,setTodo]=useState({name:"",done:false});

function handleSubmit(e){
 e.preventDefault();
 setTodos([...todos,  todo ])
 setTodo({name:"",done:false})
}

return (
        <div>
       <form onSubmit={handleSubmit}className={styles.Form}>
       <div className={styles.InputContainer}>
      <input onChange={(e)=>setTodo({name:e.target.value,done:false})} className={styles.Input} value={todo.name}type="text" placeholder="Enter to item..."/>
      <button className={styles.Button} type="submit">Add</button>
      </div>
        </form>
      
        
        </div>
    )
}
