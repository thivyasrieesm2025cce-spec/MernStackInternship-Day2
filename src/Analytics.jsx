import React from "react"
function Analytics({tasks}) {
    return <><h2>Analytics</h2><div className="stats">{[{label:"Total tasks",count:tasks.length},{label:"To do",count:tasks.filter(t=>t.status==="todo").length},{label:"Doing",count:tasks.filter(t=>t.status==="in_progress").length},{label:"Done",count:tasks.filter(t=>t.status==="done").length}].map(s=><div className="panel stat" key={s.label}><p>{s.label}</p><h2>{s.count}</h2></div>)}</div><div className="panel"><h3>Tasks by priority</h3>{["high","medium","low"].map(p=><p key={p}><span className={"badge "+p}>{p}</span> {tasks.filter(t=>t.priority===p).length} tasks</p>)}</div></>
}
export default Analytics
