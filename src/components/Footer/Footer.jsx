import "./footer.css";

import linkedinIco from "../../images/social-icon1.png";
import twitterIco from "../../images/social-icon2.png";
import facebookIco from "../../images/social-icon3.png";
import youtubeIco from "../../images/social-icon4.png";
import mediumIco from "../../images/social-icon5.png";

const Footer = () => {
  return (
    <>
      <div className="div-top">
        <div className="col_1">
          <span>COLEDA B2B</span>
          <p>
            At Coleda we provide you with attention to detail which has birthed
            methodologies for cost-effective, intent based, quality guaranteed
            progression of your sales pipeline. We engage with you on an
            omni-channel, multi touch, track-able approach till we deliver leads
            of better than expected returns.
          </p>
        </div>
        <div className="col_2">
          <span>
            <b>QUICK LINKS</b>
          </span>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy and cookies policy</a>
          <a href="#">GDPR</a>
        </div>
        <div className="col_3">
          <span>
            <b>SUBSCRIBE</b>
          </span>
          <span>SIGN-UP FOR NEWS UPDATES AND ALERTS</span>
          <div className="div-subscribe">
            <input
              type="email"
              name="email"
              className="input-box"
              placeholder="Email Address"
              required
            />
            <button>SUBSCRIBE</button>
          </div>
          <div className="social-icons">
            <img src={linkedinIco} alt="linkedin" />
            <img src={twitterIco} alt="twitter" />
            <img src={facebookIco} alt="facebook" />
            <img src={youtubeIco} alt="youtube" />
            <img src={mediumIco} alt="medium" />
          </div>
        </div>
      </div>
      <div className="div-bottom">
        <span>COPYRIGHT © 2021. COLEDA PVT. LTD. ALL RIGHTS RESERVED.</span>
      </div>
    </>
  );
};

export default Footer;
