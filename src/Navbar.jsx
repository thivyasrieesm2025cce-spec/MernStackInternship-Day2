import React from "react"
function Navbar(props){return <header className="navbar"><div className="searchbox"><span>⌕</span><input aria-label="Search tasks" placeholder="Search tasks..." value={props.search} onChange={e=>props.setSearch(e.target.value)}/></div><div className="user"><span>{props.workspace}</span><span className="avatar">{props.profile.charAt(0).toUpperCase()}</span></div></header>}
export default Navbar
