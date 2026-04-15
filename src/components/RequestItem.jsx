export default function RequestItem({ request, accounts, users, setRequests }) {
  const sourceAccount = accounts.find((a) => a.id === request.sourceAccountId);
  const destinationAccount = accounts.find(
    (a) => a.id === request.destinationAccountId
  );

  const sourceUser = users.find((u) => u.id === sourceAccount?.userId);
  const destinationUser = users.find(
    (u) => u.id === destinationAccount?.userId
  );
  const updateStatus = (newStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === request.id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <p>Amount: {request.amount}</p>
      <p>Status: {request.status}</p>
      <p>From: {sourceUser?.name}</p>
      <p>To: {destinationUser?.name}</p>

      <button onClick={() => updateStatus("approved")}>Approve</button>
      <button onClick={() => updateStatus("rejected")}>Reject</button>
    </div>
  );
}
