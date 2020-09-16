import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Button from "../components/Button";

const tutors = () => {
  const [side, setSide] = useState({ viktor: true, diana: true });

  const rotate = (bool) => {
    return bool ? "" : "rotateY(180deg)";
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <FormattedMessage id="tutors" />
        </div>
        <div className="tutorsContainer">
          <div className="cardHolder">
            {/* Diana */}
            <div
              className="flipContainer"
              onClick={() => setSide({ ...side, diana: !side["diana"] })}
            >
              <div
                className="flipCard"
                style={{ transform: rotate(side.diana) }}
              >
                <div className="flipFront diana" />
                <div className="flipBack">
                  <p>
                    <b>Diana Korladinova</b>
                    <br />
                    <FormattedMessage id="Diana" />
                  </p>
                </div>
              </div>
            </div>
            <div className="schedule">
              <Button text="schedule" path="/" />
            </div>
          </div>
          <div className="cardHolder">
            {/* Viktor */}
            <div
              className="flipContainer"
              onClick={() => setSide({ ...side, viktor: !side["viktor"] })}
            >
              <div
                className="flipCard"
                style={{ transform: rotate(side.viktor) }}
              >
                <div className="flipFront viktor" />
                <div className="flipBack">
                  <p>
                    <b>Viktor Korladinov</b>
                    <br />
                    <FormattedMessage id="Viktor" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          }
          .tutorsContainer {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .cardHolder {
            padding: 25px;
            margin: 25px;
            background-color: white;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            align-content: center;
          }
          .schedule {
            flex: 1;
            display: flex;
            justify-content: center;
            align-content: center;
          }
          /* Card flipping */
          .flipContainer {
            width: 250px;
            height: 300px;
            perspective: 1000px;
          }
          .flipCard {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 1s;
            transform-style: preserve-3d;
          }
          .flipFront,
          .flipBack {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .diana {
            background-image: url("../assets/diana.jpg");
          }
          .viktor {
            background-image: url("../assets/viktor.jpg");
          }
          .flipBack {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    </>
  );
};

export default tutors;
