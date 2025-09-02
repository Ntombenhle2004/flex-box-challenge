import React from "react";
// import "./Flexbox.css";

export default function FlexboxChallenge() {
  return (
    <div className="container">
      <div className="rowSpan2">
        <div className="calSpan1">
          <div className="orangeRectangle"></div>
        </div>
        <div className="calSpan4">
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
      <div className="first4">
        <div className="orangeRectangle"></div>

        <div className="circleRed"></div>
        <div className="squareRed"></div>
        <div className="BlueRect"></div>
      </div>
      <div className="sec3">
        <div className="ligtBlueRectangle"></div>
        <div className="Redcircle"></div>
        <div className="ligtBlueCicle"></div>
      </div>
      <div className="third3">
        <div className="BlueRectangle"></div>
        <div className="LBCicle"></div>
        <div className="OrangeRect"></div>
      </div>
      <div className="last3">
        <div className="blueCircle"></div>
        <div className="redRectangle"></div>
        <div className="circlBlue"></div>
      </div>
    </div>
  );
}
