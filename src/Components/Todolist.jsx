import styles from "./Todolist.module.css";
import Todoitemdisplay from "./Todoitemdisplay";
export default function Todolist({todos,setTodos}){
const sortedTodos = todos.slice().sort((a,b)=>Number (a.done)-Number(b.done))
    return (
      <div className={styles.list}>
      {sortedTodos.map((item)=>(
      <Todoitemdisplay key={item.name} item={item} todos= {todos} setTodos={setTodos}/> 
       ))}
        </div>
    )
}
