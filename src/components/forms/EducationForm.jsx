import React from "react";

function EducationForm({education, setEducation}){
    
const handleChange=(index, e)=>{
    const values=[...education]
    values[index][e.target.name] = e.target.value
    setEducation(values)
}

const addEducation=()=>{
    setEducation([
        ...education,
        {school:"", degree:"", year:""}
    ])
}

const deleteEducation=(index)=>{
    const values = [...education]
    values.splice(index, 1)
    setEducation(values)
}

return(
    <div>
        <h2>Education</h2>
        {Array.isArray(education) && education.map((edu, index)=>(
            <div key={index} className="form-group">
            <input type="text" name="school" placeholder="School/University" value={edu.school} onChange={(e) => handleChange(index, e)}/>

            <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(index, e)}/>

            <input type="text" name="year" placeholder="Year" value={edu.year} onChange={(e) => handleChange(index, e)}/>

            <button className ="delete-btn"onClick={()=>deleteEducation(index)}> 🗑 Delete</button>
            </div>
        ))}

        <button className="add-btn" onClick={addEducation}> + Add Education</button>
    </div>
);
}
export default EducationForm;