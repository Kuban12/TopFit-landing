import React from "react";
import Image1 from "../images/direction_1.png";
import Image2 from "../images/direction_2.png";
import Image3 from "../images/direction_3.png";
import Image4 from "../images/direction_4.png";

const Directions = () => {
  return (
    <>
      <div className="direction_container">
        <h2 className="direction_title">Наши Направления</h2>
        <div className="direction">
          <div className="direction__imgBox">
            <img src={Image1} alt="" />
            <h3 className="direction__title">Full Body + МФР </h3>
          </div>
        </div>
        <div className="direction">
          <div className="direction__imgBox">
            <img src={Image2} alt="" />
            <h3 className="direction__title">Hot Stretching</h3>
          </div>
        </div>
        <div className="direction">
          <div className="direction__imgBox">
            <img src={Image3} alt="" />
            <h3 className="direction__title">йогатерапия</h3>
          </div>
        </div>
        <div className="direction">
          <div className="direction__imgBox">
            <img src={Image4} alt="" />
            <h3 className="direction__title">Upper Body</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Directions;
