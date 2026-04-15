import { useState } from "react";

export default function CreateRequest({ accounts, setRequests }) {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      id: Date.now(),
      amount: Number(amount),
      status: "pending",
      sourceAccountId: Number(source),
      destinationAccountId: Number(destination),
    };

    setRequests((prev) => [...prev, newRequest]);

    setAmount("");
    setSource("");
    setDestination("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}
      >
        <option value="">Select Source</option>
        {accounts.map((acc) => (
          <option key={acc.id} value={acc.id}>
            Account {acc.id}
          </option>
        ))}
      </select>

      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}
      >
        <option value="">Select Destination</option>
        {accounts.map((acc) => (
          <option key={acc.id} value={acc.id}>
            Account {acc.id}
          </option>
        ))}
      </select>

      <button
        type="submit"
        style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}
      >
        Create Request
      </button>
    </form>
  );
}
