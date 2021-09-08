import "./cards.css";

import cardIcon1 from "../../images/card-icon1.png";
import cardIcon2 from "../../images/card-icon2.png";
import cardIcon3 from "../../images/card-icon3.png";
import cardIcon4 from "../../images/card-icon4.png";

const Card = () => {
  return (
    <>
      <div className="card-area">
        <div className="heading">
          <h2>
            We are always on the lookout for talented folk to join our team
          </h2>
        </div>
        <div className="card-main">
          <div className="card-child">
            <img src={cardIcon1} alt="" />
            <h2>Flexibility</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="card-child">
            <img src={cardIcon2} alt="" />
            <h2>Lifestyle</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="card-child">
            <img src={cardIcon3} alt="" />
            <h2>Fun</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
          <div className="card-child">
            <img src={cardIcon4} alt="" />
            <h2>Learning</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
