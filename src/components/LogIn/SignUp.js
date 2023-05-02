import React from "react";
import "./SignUp.css";
import login2 from "../../Asset/login2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 left">
          <div className="row main">
            <div className="col-6 logo"> </div>
            <div className="col-6 secondlogo ">
              <img src={login2} className="logo" alt="" />
            </div>

            <div className="col-12 heading">
              <h1>Sign Up</h1>
              <h3>Create a New account</h3>
            </div>
            <div className="col-12 logInInput">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="text-center">
                  <Link to="/sign-in" className="text-dark font-weight-bold">
                    Already Have Account!
                  </Link>
                  <br />
                  <br />

                  <button type="submit" className="btn btn-dark">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 right"></div>
      </div>
    </div>
  );
};

export default SignUp;
