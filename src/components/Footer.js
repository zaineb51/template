import React from 'react';

const Footer = () => {
    return (
        <>
        <div class="margin-top-30"></div>

   <div id="footer">
  {/* Main */}
  <div className="container">
    <div className="seven columns">
      <h4>About</h4>
      <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
      <a href="#" className="button">Get Started</a>
    </div>
    <div className="three columns">
      <h4>Company</h4>
      <ul className="footer-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Our Blog</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Hiring Hub</a></li>
      </ul>
    </div>
    <div className="three columns">
      <h4>Press</h4>
      <ul className="footer-links">
        <li><a href="#">In the News</a></li>
        <li><a href="#">Press Releases</a></li>
        <li><a href="#">Awards</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Timeline</a></li>
      </ul>
    </div>		
    <div className="three columns">
      <h4>Browse</h4>
      <ul className="footer-links">
        <li><a href="#">Freelancers by Category</a></li>
        <li><a href="#">Freelancers in USA</a></li>
        <li><a href="#">Freelancers in UK</a></li>
        <li><a href="#">Freelancers in Canada</a></li>
        <li><a href="#">Freelancers in Australia</a></li>
        <li><a href="#">Find Jobs</a></li>
      </ul>
    </div>
  </div>
  {/* Bottom */}
  <div className="container">
    <div className="footer-bottom">
      <div className="sixteen columns">
        <h4>Follow Us</h4>
        <ul className="social-icons">
          <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
          <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
          <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
          <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
        </ul>
        <div className="copyrights">©  Copyright 2015 by <a href="#">Work Scout</a>. All Rights Reserved.</div>
      </div>
    </div>
  </div>
</div>
</>
    );
}

export default Footer;
