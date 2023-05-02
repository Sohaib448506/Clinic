import "./LogIn.css";
import { Link } from "react-router-dom";

import login2 from "../../Asset/login2.png";
import { useHistory } from "react-router-dom";
const LogIn = () => {
  const history = useHistory();
  const onSubmit = () => {
    history.push("/verify-insurance");
  };
  return (
    <div className="LogIn">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 left">
          <div className="row main">
            <div className="col-6 logo"> </div>
            <div className="col-6 secondlogo ">
              <img src={login2} className="logo" alt="" />
            </div>

            <div className="col-12 heading">
              <h1>Log In Now</h1>
              <h3>Connect back to your account</h3>
            </div>
            <div className="col-12 logInInput">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 d-flex justify-content-center text-dark align-items-center my-3">
              <small id="emailHelp" className="form-text">
                Don't Have a account.
              </small>
              <Link to="/register" className="text-dark font-weight-bold">
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 right"></div>
      </div>
    </div>
  );
};

export default LogIn;
