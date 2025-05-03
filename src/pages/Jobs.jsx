import React, { useState, useEffect } from "react";
import jobsData from "../Mockdata/JobsData"; // Importing mock data

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [jobs, setJobs] = useState([]);

  // Load jobs from localStorage when the component mounts
  useEffect(() => {
    // Get admin-added jobs from localStorage (or use an empty array if none exist)
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Combine mock jobs data with the admin-added jobs from localStorage
    const allJobs = [...jobsData, ...savedJobs];

    // Set the combined jobs data
    setJobs(allJobs);
  }, []);

  // Filter jobs based on search term and selected filters
  const filteredJobs = jobs.filter((job) => {
    const isSearchMatch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isLocationMatch = selectedLocation
      ? job.location === selectedLocation
      : true;
    const isTypeMatch = selectedType ? job.type === selectedType : true;
    return isSearchMatch && isLocationMatch && isTypeMatch;
  });

  return (
    <div className="home-page">
      <div className="container py-5">
        <h2 className="mb-4 text-primary fw-bold text-center">Job Listings</h2>

        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Remote">Remote</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        {/* Jobs List */}
        <div className="row">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {job.company}
                    </h6>
                    <p className="card-text">{job.description}</p>
                    <p className="text-muted">
                      📍 {job.location} | 🕒 {job.type}
                    </p>
                    <button className="btn btn-outline-primary w-100">
                      Save Job
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center">No jobs found matching the filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
