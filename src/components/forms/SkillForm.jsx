import React from "react";

function SkillForm({skills, setSkills}){
    const handleChange = (index, e)=>{
        const values = [...skills];
        values[index][e.target.name] = e.target.value;
        setSkills(values);
    } 

    const addSkills = ()=>{
        setSkills([...skills, {name:"", level:50}]);
    };

    const delteSkills=(index)=>{
        const values = [...skills];
        values.splice(index,1);
        setSkills(values);
    };

    return(
        <div>
            <h2>Skills</h2>
        {skills.map((skills, index)=>(
            <div key={index} className="form-group">
                <input type="text" name="name" placeholder="Skills (React, Js....)" value={skills.name} onChange={(e)=>handleChange(index, e)}/>
                <input type="range" name="level" min="0" max="100" value={skills.level} onChange={(e)=>handleChange(index, e)}/>
                <button className="delete-btn" onClick={()=>delteSkills(index)}> 🗑 Delete</button>
            </div>
        ))}
        <button className="add-btn" onClick={addSkills}>+ Add Skill</button>
        </div>
    )
}

export default SkillForm;