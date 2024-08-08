import React, { useEffect, useState } from "react";

const Timer = () => {
  const [input, setInput] = useState(500);
  const [time, setTime] = useState(250);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setInput((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalID);
  });

  const handleToggle = () => {
    setToggle(!toggle);
    clearInterval(intervalID);
  };

  const handleReset = () => {
    setInput("");
  };

  // ===================================
  let num = input;
  let hr = Math.floor(num / 10000);

  num = num - hr * 10000;

  let min = Math.floor(num / 100);

  num = num - min * 100;

  let sec = num;

  if (sec > 59) {
    sec = Math.abs(60 - sec);
    min += 1;
    if (min > 59) {
      min = Math.abs(60 - min);
      hr += 1;
    }
  }
  // ============================

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setInput(event.target.value);
    }
  };

  const handleChange = (e) => {
    let number = e.target.value;
    if (number > 999999) {
      number = number % 1000000;
      console.log("num:", number);
    }
    setInput(number);
  };

  console.log(input);
  return (
    <div className="container">
      <div className="timerBox">
        {/* <input type="number" onKeyDown={() => handleKeyDown(event)} /> */}
        <input type="number" value={input} onChange={(e) => handleChange(e)} />
        <div>{`${hr}h : ${min}m : ${sec}s`}</div>
        <div>
          <button onClick={handleToggle}>{toggle ? "START" : "STOP"}</button>
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
