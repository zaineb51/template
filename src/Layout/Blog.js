import React from 'react';

const Blog = () => {
    return (
     <div className="container">
  {/* Blog Posts */}
  <div className="eleven columns">
    <div className="padding-right">
      {/* Post */}
      <div className="post-container">
        <div className="post-img"><a href="blog-single-post.html"><img src="images/blog-post-01.jpg" alt /></a><div className="hover-icon" /></div>
        <div className="post-content">
          <a href="#"><h3>Hey Job Seeker, It’s Time To Get Up And Get Hired</h3></a>
          <div className="meta-tags">
            <span>October 10, 2015</span>
            <span><a href="#">0 Comments</a></span>
          </div>
          <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p>
          <a className="button" href="blog-single-post.html">Read More</a>
        </div>
      </div>
      {/* Post */}
      <div className="post-container">
        <div className="post-img"><a href="blog-single-post.html"><img src="images/blog-post-02.jpg" alt /></a><div className="hover-icon" /></div>
        <div className="post-content">
          <a href="#"><h3>How to "Woo" a Recruiter and Land Your Dream Job</h3></a>
          <div className="meta-tags">
            <span>September 12, 2015</span>
            <span><a href="#">0 Comments</a></span>
          </div>
          <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p>
          <a className="button" href="blog-single-post.html">Read More</a>
        </div>
      </div>
      {/* Post */}
      <div className="post-container">
        <div className="post-img"><a href="blog-single-post.html"><img src="images/blog-post-03.jpg" alt /></a><div className="hover-icon" /></div>
        <div className="post-content">
          <a href="#"><h3>11 Tips to Help You Get New Clients Through Cold Calling</h3></a>
          <div className="meta-tags">
            <span>August 27, 2015</span>
            <span><a href="#">0 Comments</a></span>
          </div>
          <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae.</p>
          <a className="button" href="blog-single-post.html">Read More</a>
        </div>
      </div>
      {/* Pagination */}
      <div className="pagination-container">
        <nav className="pagination">
          <ul>
            <li><a href="#" className="current-page">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </nav>
        <nav className="pagination-next-prev">
          <ul>
            <li><a href="#" className="prev">Previous</a></li>
            <li><a href="#" className="next">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/* Blog Posts / End */}
  {/* Widgets */}
  <div className="five columns blog">
    {/* Search */}
    <div className="widget">
      <h4>Search</h4>
      <div className="widget-box search">
        <div className="input"><input className="search-field" type="text" placeholder="To search type and hit enter" defaultValue /></div>
      </div>
    </div>
    <div className="widget">
      <h4>Got any questions?</h4>
      <div className="widget-box">
        <p>If you are having any questions, please feel free to ask.</p>
        <a href="contact.html" className="button widget-btn"><i className="fa fa-envelope" /> Drop Us a Line</a>
      </div>
    </div>
    {/* Tabs */}
    <div className="widget">
      <ul className="tabs-nav blog">
        <li className="active"><a href="#tab1">Popular</a></li>
        <li><a href="#tab2">Featured</a></li>
        <li><a href="#tab3">Recent</a></li>
      </ul>
      {/* Tabs Content */}
      <div className="tabs-container">
        <div className="tab-content" id="tab1">
          {/* Recent Posts */}
          <ul className="widget-tabs">
            {/* Post #1 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-01.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">How to "Woo" a Recruiter and Land Your Dream Job</a></h5>
                <span>September 12, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
            {/* Post #2 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-02.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">Hey Job Seeker, It’s Time To Get Up And Get Hired</a></h5>
                <span>October 10, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
            {/* Post #3 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-03.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">11 Tips to Help You Get New Clients Through Cold Calling</a></h5>
                <span>August 27, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
          </ul>
        </div>
        <div className="tab-content" id="tab2">
          {/* Featured Posts */}
          <ul className="widget-tabs">
            {/* Post #1 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-02.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">Hey Job Seeker, It’s Time To Get Up And Get Hired</a></h5>
                <span>October 10, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
            {/* Post #2 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-01.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">How to "Woo" a Recruiter and Land Your Dream Job</a></h5>
                <span>September 12, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
            {/* Post #3 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-03.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">11 Tips to Help You Get New Clients Through Cold Calling</a></h5>
                <span>August 27, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
          </ul>
        </div>
        <div className="tab-content" id="tab3">
          {/* Recent Posts */}
          <ul className="widget-tabs">
            {/* Post #1 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-03.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">11 Tips to Help You Get New Clients Through Cold Calling</a></h5>
                <span>August 27, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
            {/* Post #2 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-02.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">Hey Job Seeker, It’s Time To Get Up And Get Hired</a></h5>
                <span>October 10, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
            {/* Post #3 */}
            <li>
              <div className="widget-thumb">
                <a href="blog-single-post.html"><img src="images/blog-widget-01.png" alt /></a>
              </div>
              <div className="widget-text">
                <h5><a href="blog-single-post.html">How to "Woo" a Recruiter and Land Your Dream Job</a></h5>
                <span>September 12, 2015</span>
              </div>
              <div className="clearfix" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="widget">
      <h4>Social</h4>
      <ul className="social-icons">
        <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
        <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
        <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
        <li><a className="linkedin" href="#"><i className="icon-linkedin" /></a></li>
      </ul>
    </div>
    <div className="clearfix" />
    <div className="margin-bottom-40" />
  </div>
</div>

    );
}

export default Blog;
