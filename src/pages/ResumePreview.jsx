import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const ResumePreview = () => {
  const { state: resumeData } = useLocation();
  const resumeRef = useRef();
  

  // Handle PDF download
  const handleDownloadPDF = () => {
    html2pdf().from(resumeRef.current).save();
  };

  

 
  return (
    <div className='home-page'>
    <div className="container py-5">
      <h2 className="mb-4 text-center text-primary">Resume Preview</h2>

      

      {/* Resume Content */}
      <div
        ref={resumeRef}
        className={`border rounded p-4 bg-white shadow-sm`}
        style={{ fontFamily: 'Arial', lineHeight: 1.6 }}
      >
        <div className="text-center mb-3">
          <h2 className="text-dark mb-1">{resumeData.name}</h2>
          <p className="text-muted">{resumeData.email} | {resumeData.phone}</p>
          <p className="text-muted">{resumeData.github} | {resumeData.linkedin}</p>
        </div>

        <hr />

        <section className="mb-3">
          <h4 className="text-primary">Skills</h4>
          <ul>
            {resumeData.skills.split(',').map((skill, i) => (
              <li key={i}>{skill.trim()}</li>
            ))}
          </ul>
        </section>

        <section className="mb-3">
          <h4 className="text-primary">Experience</h4>
          <p>{resumeData.experience}</p>
        </section>

        <section className="mb-3">
          <h4 className="text-primary">Projects</h4>
          <p>{resumeData.projects}</p>
        </section>

        <section className="mb-3">
          <h4 className="text-primary">Education</h4>
          <p>{resumeData.education}</p>
        </section>
      </div>

      {/* Download Buttons */}
      <div className="text-center mt-4">
        <button className="btn btn-outline-primary me-2" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
    </div>
  );
};

export default ResumePreview;
