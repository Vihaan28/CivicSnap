// Serverless function for receiving civic complaints
exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  console.log("Received complaint:", body);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ success: true, message: "Complaint received" }),
  };
};
