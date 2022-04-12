import React from 'react';

const Register = () => {
    return (
        <div className="container">
        <div className="my-account">
          <ul className="tabs-nav">
            <li>Register</li>
          </ul>
          <div className="tabs-container">
          <div className="tab-content" >
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

export default Register;
