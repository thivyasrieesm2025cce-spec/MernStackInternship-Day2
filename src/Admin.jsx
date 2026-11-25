import React,{useState} from "react"
function Admin({members,setMembers}) {
    const [name,setName]=useState("")
    function add(e){e.preventDefault();if(!name.trim() || members.some(m=>m.name.toLowerCase()===name.trim().toLowerCase())){alert("Enter a unique member name");return}setMembers([...members,{name:name.trim(),role:"Member"}]);setName("")}
    return <><h2>Admin</h2><p>Demo member management (no authentication yet).</p><form className="panel" onSubmit={add}><label>Member name<input required value={name} onChange={e=>setName(e.target.value)}/></label><button>Add Member</button></form>{members.map(m=><div className="panel member" key={m.name}><strong>{m.name}</strong><select aria-label={"Role for "+m.name} value={m.role} onChange={e=>setMembers(members.map(x=>x.name===m.name?{...x,role:e.target.value}:x))}><option>Admin</option><option>Member</option></select><button className="danger" onClick={()=>setMembers(members.filter(x=>x.name!==m.name))}>Remove</button></div>)}</>
}
export default Admin
