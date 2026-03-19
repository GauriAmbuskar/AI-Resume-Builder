import React from "react";

function ExperienceForm({experience,setExperience}){

const handleChange=(index,e)=>{

const values=[...experience]

values[index][e.target.name]=e.target.value

setExperience(values)

}

const addExperience=()=>{

setExperience([
...experience,
{company:"",role:"",year:""}
])

}

const deleteExperience=(index)=>{

const values=[...experience]
values.splice(index,1)
setExperience(values)

}

return(

<div>

<h2>Experience</h2>

{experience.map((exp,index)=>(

<div key={index} className="form-group">

<input
type="text"
name="company"
placeholder="Company"
value={exp.company}
onChange={(e)=>handleChange(index,e)}
/>

<input
type="text"
name="role"
placeholder="Role"
value={exp.role}
onChange={(e)=>handleChange(index,e)}
/>

<input
type="text"
name="year"
placeholder="Year"
value={exp.year}
onChange={(e)=>handleChange(index,e)}
/>

<button className="delete-btn"onClick={()=>deleteExperience(index)}>
 🗑 Delete
</button>

</div>

))}

<button className="add-btn" onClick={addExperience}>
+ Add Experience
</button>

</div>

)

}

export default ExperienceForm