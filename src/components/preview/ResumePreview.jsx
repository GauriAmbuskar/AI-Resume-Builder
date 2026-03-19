import React from "react";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function ResumePreview({personalData, education, experience, skills, projects, template, themeColor, font, sections, setSections}){
       const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(sections);
        const [movedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, movedItem);
        setSections(items);
};
    return (
        <>
   
        <div id="resume" className={`resume-preview ${template}`} style={{fontFamily: font}}>
            {personalData.photo && (
            <img src={personalData.photo} alt="profile" className="profile-photo"/>
            )}

            <h1 style={{color: themeColor}}>{personalData.name}</h1>
            <p>{personalData.email}</p>
            <p>{personalData.phone}</p>
            <p>{personalData.location}</p>

            <h3>Summary</h3>
            <p>{personalData.summary}</p>

           {/* Drag & Drop Sections */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>

              {sections.map((section, index) => (
                <Draggable key={section} draggableId={section} index={index}>
                  {(provided) => (
                    <div
                      className="draggable-section"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >

                      {/* EDUCATION */}
                      {section === "education" && (
                        <>
                          <h3 style={{ color: themeColor }}>Education</h3>
                          {education.map((edu, i) => (
                            <p key={i}>
                              {edu.degree} - {edu.school} ({edu.year})
                            </p>
                          ))}
                        </>
                      )}

                      {/* EXPERIENCE */}
                      {section === "experience" && (
                        <>
                          <h3 style={{ color: themeColor }}>Experience</h3>
                          {experience.map((exp, i) => (
                            <p key={i}>
                              {exp.role} - {exp.company} ({exp.year})
                            </p>
                          ))}
                        </>
                      )}

                      {/* SKILLS */}
                      {section === "skills" && (
                        <>
                          <h3 style={{ color: themeColor }}>Skills</h3>
                          {skills.map((skill, i) => (
                            <div key={i} className="skill-bar">
                              <span>{skill.name}</span>
                              <div className="bar">
                                <div
                                  className="fill"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </>
                      )}

                      {/* PROJECTS */}
                      {section === "projects" && (
                        <>
                          <h3 style={{ color: themeColor }}>Projects</h3>
                          {projects.map((proj, i) => (
                            <div key={i} className="project-card">
                              <h4>{proj.title}</h4>
                              <p>{proj.description}</p>

                              <div className="tags">
                                {proj.tech.split(",").map((t, j) => (
                                  <span key={j} className="tag">{t}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </>
                      )}

                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}

            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
    </>
  );
}

export default ResumePreview;