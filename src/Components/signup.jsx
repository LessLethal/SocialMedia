import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function signup() {
  return (
    <>
      <h2>Create Your Account</h2>

      <div className="formMain">
        <form action="#">
          <div className="form-input">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create your Password"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Repeat Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create your Password"
              required
            />
          </div>

          <div className="form-input">
            <label>
              <input type="checkbox" name="remember" />
              Remember Me
            </label>
          </div>

          <div className="form-input">
            <label>
              <input type="checkbox" name="terms" />I consent to the
              <Link to="/terms">Terms of Service</Link>
            </label>
          </div>

          <div className="form-input">
            <button type="submit" className="form-button">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default signup;
