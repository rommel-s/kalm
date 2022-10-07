import React, { useState } from "react";
import "./Main.css";

export default function Main() {
  const [isActive, setActive] = useState("true");
  const [toAnimate, setAnimation] = useState("true");

  function startAnimation() {
    setActive(!isActive);
    setAnimation(!toAnimate);
  }

  return (
    <div className="mainContainer">
      <div className="main">
        <section>
          <div
            className={isActive ? "box" : "box start-animation"}
            id="box"
          ></div>
          <div className="external-box"></div>
          <button
            className={toAnimate ? " " : "btn-animation "}
            onClick={startAnimation}
          ></button>
        </section>
      </div>
    </div>
  );
}
