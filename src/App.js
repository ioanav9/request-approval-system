import { useState } from "react";
import RequestList from "./components/RequestList";
import CreateRequest from "./components/CreateRequest";

export default function App() {
  const [users] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);

  const [accounts] = useState([
    { id: 1, userId: 1, balance: 500 },
    { id: 2, userId: 2, balance: 300 },
  ]);

  const [requests, setRequests] = useState([]);

  return (
    <div>
      <h1>Approval Requests</h1>

      <CreateRequest accounts={accounts} setRequests={setRequests} />

      <RequestList
        requests={requests}
        accounts={accounts}
        users={users}
        setRequests={setRequests}
      />
    </div>
  );
}
