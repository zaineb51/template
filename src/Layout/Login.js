import React from 'react';

const Login = () => {
    return (
        <div className="container">
        <div className="my-account">
          <ul className="tabs-nav">
            <li >Login</li>
          </ul>
          <div className="tabs-container">

          <div className="tab-content"  >
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



        
            
        </div>
        </div>
        </div>

    );
}

export default Login;
