import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <header>
  <div className="container">
    <div className="sixteen columns">
      <div id="logo">
        <h1><a href="index.html"><img src="images/logo.png" alt="Work Scout" /></a></h1>
      </div>
      <nav id="navigation" className="menu">
        <ul id="responsive">
          <li><a href="index.html">Home</a>
            <ul>
              <li><a href="index.html">Home #1</a></li>
              <li><a href="index-2.html">Home #2</a></li>
              <li><a href="index-3.html">Home #3</a></li>
              <li><a href="index-4.html">Home #4</a></li>
            </ul>
          </li>
          <li><a href="#">Pages</a>
            <ul>
              <li><a href="job-page.html">Job Page</a></li>
              <li><a href="job-page-alt.html">Job Page Alternative</a></li>
              <li><a href="resume-page.html">Resume Page</a></li>
              <li><a href="shortcodes.html">Shortcodes</a></li>
              <li><a href="pricing-tables.html">Pricing Tables</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </li>
          <li><a href="#" id="current">For Candidates</a>
            <ul>
              <li><a href="browse-jobs.html">Browse Jobs</a></li>
              <li><a href="browse-categories.html">Browse Categories</a></li>
              <li><a href="add-resume.html">Add Resume</a></li>
              <li><a href="manage-resumes.html">Manage Resumes</a></li>
              <li><a href="job-alerts.html">Job Alerts</a></li>
            </ul>
          </li>
          <li><a href="#">For Employers</a>
            <ul>
              <li><a href="add-job.html">Add Job</a></li>
              <li><a href="manage-jobs.html">Manage Jobs</a></li>
              <li><a href="manage-applications.html">Manage Applications</a></li>
              <li><a href="browse-resumes.html">Browse Resumes</a></li>
            </ul>
          </li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <ul className="responsive float-right">
          <li><Link to ="/register"> <i className="fa fa-user" /> Sign Up</Link></li>
          <li><Link to="/login"><i className="fa fa-lock" /> Log In</Link></li>
        </ul>
      </nav>
      <div id="mobile-navigation">
        <a href="#menu" className="menu-trigger"><i className="fa fa-reorder" /> Menu</a>
      </div>
    </div>
  </div>
</header>

    );
}

export default Header;
