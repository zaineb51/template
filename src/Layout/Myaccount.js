import React from 'react';

const Myaccount = () => {
    return (
   <div className="container">
  <div className="my-account">
    <ul className="tabs-nav">
      <li className><a href="#tab1">Login</a></li>
      <li><a href="#tab2">Register</a></li>
    </ul>
    <div className="tabs-container">
      {/* Login */}
      <div className="tab-content" id="tab1" style={{display: 'none'}}>
        <h3 className="margin-bottom-10 margin-top-10">Login</h3>
        <form method="post" className="login">
          <p className="form-row form-row-wide">
            <label htmlFor="username">Username or Email Address:</label>
            <input type="text" className="input-text" name="username" id="username" defaultValue />
          </p>
          <p className="form-row form-row-wide">
            <label htmlFor="password">Password:</label>
            <input className="input-text" type="password" name="password" id="password" />
          </p>
          <p className="form-row">
            <input type="submit" className="button" name="login" defaultValue="Login" />
            <label htmlFor="rememberme" className="rememberme">
              <input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> Remember Me</label>
          </p>
          <p className="lost_password">
            <a href="#">Lost Your Password?</a>
          </p>
        </form>
      </div>
      {/* Register */}
      <div className="tab-content" id="tab2" style={{display: 'none'}}>
        <h3 className="margin-bottom-10 margin-top-10">Register</h3>
        <form method="post" className="register">
          <p className="form-row form-row-wide">
            <label htmlFor="reg_email">Email Address:</label>
            <input type="email" className="input-text" name="email" id="reg_email" defaultValue />
          </p>
          <p className="form-row form-row-wide">
            <label htmlFor="reg_password">Password:</label>
            <input type="password" className="input-text" name="password" id="reg_password" />
          </p>
          <p className="form-row form-row-wide">
            <label htmlFor="reg_password2">Repeat Password:</label>
            <input type="password" className="input-text" name="password" id="reg_password2" />
          </p>
          <p className="form-row">
            <input type="submit" className="button" name="register" defaultValue="Register" />
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

    );
}

export default Myaccount;
