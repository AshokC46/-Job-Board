import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    github: '',
    linkedin:'',
    skills: '',
    experience: '',
    projects: '',
    education: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/resume-preview', { state: resumeData });
  };

  return (
    <div className="home-page">
    <div className="container py-5">
      <h2 className="mb-4 text-center text-success">Resume Builder</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={resumeData.name}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="e.g. John Wick"
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={resumeData.email}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={resumeData.phone}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Github</label>
            <input
              type="link"
              name="github"
              value={resumeData.github}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="github link"
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Linkedin</label>
            <input
              type="link"
              name="linkedin"
              value={resumeData.linkedin}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="linkedin"
            />
          </div>

          <div className="mb-3 col-12">
            <label className="form-label">Skills</label>
            <textarea
              name="skills"
              value={resumeData.skills}
              onChange={handleChange}
              className="form-control"
              placeholder="e.g. html, css, javascript"
            />
          </div>

          <div className="mb-3 col-12">
            <label className="form-label">Experience</label>
            <textarea
              name="experience"
              value={resumeData.experience}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3 col-12">
            <label className="form-label">Projects</label>
            <textarea
              name="projects"
              value={resumeData.projects}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          
          <div className="mb-3 col-12">
            <label className="form-label">Education</label>
            <textarea
              name="education"
              value={resumeData.education}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit & Preview
        </button>
      </form>
    </div>
    </div>
  );
};

export default Resume;
