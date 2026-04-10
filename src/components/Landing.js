import { Link } from "react-router-dom";
import LandingTitles from "./LandingTitles";

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="inner-landing">
          <h1>Tawasol</h1>
          <LandingTitles/>
          <div className="buttons">
            <Link to="/login" className="btn login">
              Login
            </Link>
            <Link to="/register" className="btn signup">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
