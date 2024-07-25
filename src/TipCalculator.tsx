import React, { useState } from "react";

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);
  const [total, setTotal] = useState<number | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (bill !== undefined && tip !== undefined) {
      const tipAmount = (bill * tip) / 100;
      const total = bill + tipAmount;
      setTotal(Math.round(total * 100) / 100);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bill">Bill amount: </label>
        <input
          type="number"
          id="bill"
          value={bill !== undefined ? bill : ""}
          placeholder="35"
          onChange={(event) => setBill(parseFloat(event.target.value))}
        />
        <label htmlFor="tip">Tip amount: </label>
        <input
          type="number"
          id="tip"
          value={tip !== undefined ? tip : ""}
          placeholder="20"
          onChange={(event) => setTip(parseFloat(event.target.value))}
        />
        <button type="submit">Calculate</button>
      </form>
      {total !== undefined && (
        <h2>Your total bill is ${total.toFixed(2)}</h2>
      )}
    </>
  );
};

export default TipCalculator;
