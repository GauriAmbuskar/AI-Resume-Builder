import {useState} from "react";
import PersonalForm from "../components/forms/personalForm";
import ResumePreview from "../components/preview/ResumePreview";
import EducationForm from "../components/forms/EducationForm";
import ExperienceForm from "../components/forms/ExperienceForm";
import SkillForm from "../components/forms/SkillForm";
import ProjectForm from "../components/forms/ProjectForm";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ResumeBuilder(){
    
    const [sections, setSections] = useState([
        "education",
        "experience",
        "skills",
        "projects"
    ]);

 

    const handleDownload = async() =>{
          const element = document.getElementById("resume");
    if(!element) return;
    const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true
    })
        
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const imgwidth = 210;
        const imgHeight = (canvas.height*imgwidth)/canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgwidth, imgHeight);
        pdf.save("resume.pdf");
    }

    const [personalData, setPersonalData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        summary: "",
        photo: ""
        }
    );

    const [template, setTemplate] = useState("classic");
    const [themecolor, setThemeColor] = useState("#2563eb");
    const [font, setFont] = useState("sans-serif");

    const[education, setEducation] = useState([{school:"", degree:"", year:""}
    ]);

    const[experience, setExperience] = useState([{company:"", role:"", year:""}
    ]);

    const[skills, setSkills] = useState([
        {name:"", level:50}
    ]);

    const[projects, setProjects] = useState([
        {title:"", description:"", tech:""}
    ]);

    return(
        <>
        <h1 className="app-title">AI Resume Builder</h1>
        <div className="builder-container">
            <div className="theme-controls">
                <select onChange={(e)=>setTemplate(e.target.value)}>
                    <option value="classic">Classic</option>
                    <option value="modern">Modern</option>
                </select>

                <input type="color" value={themecolor} onChange={(e)=>setThemeColor(e.target.value)}/>
                
                <select onChange={(e)=>setFont(e.target.value)}>
                    <option value="'Segoe UI', sans-serif">Default</option>
                    <option value="Georgia, serif">Serif</option>
                    <option value="'Courier New', monospace">Mono</option>
                    <option value="Arial, sans-serif">Arial</option>
                </select>
            </div>
            <div className="form-panel">
                <h2>Resume Details</h2>
                <PersonalForm personalData={personalData} setPersonalData={setPersonalData}/>

                <EducationForm education={education} setEducation={setEducation}/>

                <ExperienceForm experience={experience} setExperience={setExperience}/>

                <SkillForm skills={skills} setSkills={setSkills}/>

                <ProjectForm projects={projects} setProjects={setProjects}/>
            </div>
            
            <div className="preview-panel">
                <h2>Live Resume Preview</h2>
                <button className="download-btn" onClick={handleDownload}>
                Download PDF
            </button>
                <ResumePreview 
                personalData={personalData} 
                education={education} 
                experience={experience}
                skills={skills}
                projects={projects}
                template={template}
                themeColor={themecolor}
                font={font}
                sections={sections}
                setSections={setSections}
                />
            </div>
        </div>
        </>
    )
}

export default ResumeBuilder;