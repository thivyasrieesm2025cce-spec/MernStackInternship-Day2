import React from "react"
function TaskCard(props) {
    const task = props.task
    return <article className={"task-card priority-" + task.priority}>
        <h3>{task.title}</h3>
        <div className="badges">
            <span className={"badge " + task.status}>{task.status === "in_progress" ? "Doing" : task.status === "todo" ? "To do" : "Done"}</span>
            <span className={"badge " + task.priority}>{task.priority}</span>
        </div>
        <p>{task.description}</p>
        <div className="card-footer"><span>Due: {task.dueDate}</span><span className="assignee">Assigned to: {task.assignee}</span></div>
        <div className="actions"><button onClick={props.edit}>Edit</button><button className="danger" onClick={props.remove}>Delete</button></div>
    </article>
}
export default TaskCard
