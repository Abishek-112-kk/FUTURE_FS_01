import React from "react";

export default function ErrorPage({ error }) {
  return (
    <div style={{ padding: 24 }}>
      <h1>Application Error</h1>
      <p>Sorry — something went wrong while rendering this page.</p>
      {error ? (
        <pre style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>{String(error)}</pre>
      ) : null}
    </div>
  );
}
