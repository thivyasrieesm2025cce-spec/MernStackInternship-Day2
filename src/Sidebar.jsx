import React from "react"
function Sidebar(props) {
 const pages=[{name:"Dashboard",icon:"⌂"},{name:"Projects",icon:"◇"},{name:"Tasks",icon:"☷"},{name:"Admin",icon:"♙"},{name:"Analytics",icon:"▥"},{name:"Settings",icon:"⚙"}]
 return <aside className="sidebar"><h1><span>✦</span> PulseWorks AI</h1><small>WORKSPACE</small>{pages.map(p=><button key={p.name} className={props.page===p.name?"active":""} onClick={()=>props.setPage(p.name)}><span>{p.icon}</span>{p.name}</button>)}</aside>
}
export default Sidebar
