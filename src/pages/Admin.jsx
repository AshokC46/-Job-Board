import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');


  const navigate = useNavigate();

  // Handle job submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!jobTitle || !company || !location || !jobType || !description) {
      setMessage('Please fill in all fields');
      return;
    }

    const newJob = {
      id: Date.now(), // Generate unique ID for each job
      title: jobTitle,
      company: company,
      location: location,
      type: jobType,
      description: description,
    };

    // Retrieve existing jobs from localStorage, or initialize as an empty array
    const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Add the new job to the jobs array
    existingJobs.push(newJob);

    // Save the updated jobs array to localStorage
    localStorage.setItem('jobs', JSON.stringify(existingJobs));
    console.log('Saved Jobs:', existingJobs); 
    setMessage('Job added successfully!');

    // Reset the form fields
    setJobTitle('');
    setCompany('');
    setLocation('');
    setJobType('');
    setDescription('');

    navigate('/jobs');
  };

  return (
    <div className="home-page">
    <div className="container py-5">
      <h2 className="mb-4 text-primary fw-bold text-center">Admin Panel: Add New Job</h2>

      {/* Admin Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job Type</label>
          <select
            className="form-select"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Job Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" >Add Job</button>
      </form>

      {message && <p className="mt-4 text-center text-success">{message}</p>}
    </div>
    </div>
  );
};

export default Admin;
