import React, { useState } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
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
            className={toAnimate ? " " : "btn-animation"}
            onClick={startAnimation}
          ></button>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
