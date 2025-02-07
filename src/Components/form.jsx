import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../form.css"

function Form() {
  return (
    <>
      <h2>Log In</h2>
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
              placeholder="Enter your Password"
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
            <button type="submit" className="form-button">
              Log In
            </button>
          </div>

          <div className="terms">
            Don't have an account?
            <Link to="/signup">Sign Up!</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
