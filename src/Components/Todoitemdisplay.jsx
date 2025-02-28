import styles from "./Todoitemdisplay.module.css";
export default function({item,todos,setTodos}){
function handleDelete(item){
   setTodos(todos.filter((todo)=>todo!==item)) 
}
function handleClick(name){
 setTodos(todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo));
}
const markName =item.done ? styles.completed : "";

 return(
 <div className={styles.item}>
 <div className={styles.itemName}>
    <span className={markName} onClick={()=>handleClick(item.name)}>{item.name}</span>
     <span><button className={styles.deleteButton}onClick={()=>handleDelete(item)}>x</button></span></div>
 <hr className={styles.line}/>
 </div>
 )
}
