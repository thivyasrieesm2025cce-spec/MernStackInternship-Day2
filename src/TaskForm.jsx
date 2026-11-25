import React, {useState} from "react"
function TaskForm(props) {
    const [task,setTask] = useState({title:"",description:"",status:"todo",priority:"medium",dueDate:"",assignee:"",...props.task})
    function change(key,value) {setTask({...task,[key]:value})}
    function submit(e) {
        e.preventDefault()
        if(task.title.trim().length < 3) {alert("Enter at least 3 characters for the title");return}
        props.save({...task,title:task.title.trim()})
    }
    return <form className="panel" onSubmit={submit}>
        <h2>{props.task.id ? "Edit Task" : "New Task"}</h2>
        <label>Title<input required maxLength={120} value={task.title} onChange={e=>change("title",e.target.value)}/></label>
        <label>Description<textarea maxLength={2000} value={task.description} onChange={e=>change("description",e.target.value)}/></label>
        <label>Status<select value={task.status} onChange={e=>change("status",e.target.value)}><option value="todo">To do</option><option value="in_progress">Doing</option><option value="done">Done</option></select></label>
        <label>Priority<select value={task.priority} onChange={e=>change("priority",e.target.value)}>{["low","medium","high"].map(p=><option key={p}>{p}</option>)}</select></label>
        <label>Due date<input placeholder="e.g. 05 Dec" value={task.dueDate} onChange={e=>change("dueDate",e.target.value)}/></label>
        <label>Assignee<select value={task.assignee} onChange={e=>change("assignee",e.target.value)}><option value="">Unassigned</option>{task.assignee && !props.members.some(m=>m.name===task.assignee) && <option>{task.assignee}</option>}{props.members.map(m=><option key={m.name}>{m.name}</option>)}</select></label>
        <div className="actions"><button type="submit">Save Task</button><button type="button" className="danger" onClick={props.cancel}>Cancel</button></div>
    </form>
}
export default TaskForm
