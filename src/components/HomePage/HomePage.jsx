import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";

import "./homepage.css";
import headerImg from "../../images/img1.png";
import Openings from "../Openings/Openings";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="main">
        <div className="main-content">
          <h1>WE ARE HIRING</h1>
          <br />
          <p style={{ fontSize: 20 }}>
            By adding an extended arm to your sales and marketing teams we would
            love to strengthen your B2B marketing and sales approach. Our team
            will help you reach larger audience of potential leads to keep you
            ahead in the race. Feel free to get in touch with us to embark on a
            path of success.
          </p>
        </div>
        <div className="main-img">
          <img src={headerImg} alt="" />
        </div>
      </div>

      <Cards />

      <Openings />

      <div className="box"></div>
    </>
  );
};

export default HomePage;
