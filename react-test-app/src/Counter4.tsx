import React, { useState, useMemo } from "react";

const Counter4 = () => {

  const [inputDouble, setInputDouble] = useState<number>(5);
  const [inputTripel, setInputTripel] = useState<number>(5);

  const CalculateDouble = (num: number) => {
    let double = num * 2;
    console.log("double: " + double);
    return double;
  };

  const CalculateTriple = (num: number) => {
    let triple = num * 3;
    console.log("triple: " + triple);
    return triple;
  };

  // useMemoの依存配列を空にする
  const doubleNum = useMemo<number>(() => CalculateDouble(inputDouble), []);

  // useMemoの依存配列を空にする
  const tripleNum = useMemo<number>(() => CalculateTriple(inputTripel), []);

  return (
    <>
      <div style={{ marginBottom: "40px" }}>
        <p>入力値の2倍: {doubleNum}</p>
        <input
          type="number"
          defaultValue="5"
          onChange={(e) => setInputDouble(Number(e.target.value))}
        />
      </div>
      <div>
        <p>入力値の3倍: {tripleNum}</p>
        <input
          type="number"
          defaultValue="5"
          onChange={(e) => setInputTripel(Number(e.target.value))}
        />
      </div>
    </>
  );
};

export default Counter4