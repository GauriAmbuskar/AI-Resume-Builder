import React from "react";

function ProjectForm({projects, setProjects}){
    const handleChange=(index, e)=>{
        const values = [...projects];
        values[index][e.target.name] = e.target.value;
        setProjects(values);
    }

    const addProject = () =>{
        setProjects([
            ...projects,
            {title:"", description:"", tech:""}
        ]);
    };

    const deleteProject = (index)=>{
        const values = [...projects];
        values.splice(index,1);
        setProjects(values);
    }
    return(
          <div>
      <h2>Projects</h2>

      {projects.map((proj, index) => (
        <div key={index} className="form-group">

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={proj.title}
            onChange={(e) => handleChange(index, e)}
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={proj.description}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            name="tech"
            placeholder="Tech Stack (comma separated)"
            value={proj.tech}
            onChange={(e) => handleChange(index, e)}
          />

          <button className="delete-btn" onClick={() => deleteProject(index)}>
            🗑 Delete
          </button>

        </div>
      ))}

      <button className="add-btn" onClick={addProject}>
        + Add Project
      </button>

    </div>
  );
}

export default ProjectForm;