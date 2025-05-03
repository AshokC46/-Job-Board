import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-background">
    <div className="home-page bg-light py-5">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold text-primary">Welcome to JobBoard</h1>
        <p className="lead text-secondary">
          Your one-stop platform to explore jobs and build a professional resume
        </p>

        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-4 mb-4">
            <Link to="/jobs" className="card-link">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title"> Browse Jobs</h5>
                  <p className="card-text">Find your dream job from a variety of listings.</p>
                </div>
              </div>
            </Link>
          </div>

         
          <div className="col-12 col-md-4 mb-4">
            <Link to="/resume" className="card-link">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title"> Build Resume</h5>
                  <p className="card-text">Create and download a professional resume in PDF.</p>
                </div>
              </div>
            </Link>
          </div>

          
          <div className="col-12 col-md-4 mb-4">
            <Link to="/admin" className="card-link">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title"> Admin Panel</h5>
                  <p className="card-text">Post new job listings as an admin.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="row justify-content-center my-4">
          <div className="col-md-8">
            <h3 className="text-dark fw-bold mb-4">Why Choose JobBoard?</h3>
            <p className="text-muted fw-bold">
               Lightning-fast job search |  Smart filters & categories |  Resume builder with PDF download | No sign-up <br/>required
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-2">
          <Link to="/jobs" className="btn btn-primary px-4 py-2 fw-semibold">
            Start Exploring Jobs →
          </Link>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
