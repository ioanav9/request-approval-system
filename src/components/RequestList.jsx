import RequestItem from "./RequestItem";

export default function RequestList({
  requests,
  accounts,
  users,
  setRequests,
}) {
  return (
    <div>
      {requests.map((req) => (
        <RequestItem
          key={req.id}
          request={req}
          accounts={accounts}
          users={users}
          setRequests={setRequests}
        />
      ))}
    </div>
  );
}
