import React from "react";

/**
 * Public authentication/sign-in/sign-up page (Firebase stub).
 */
// PUBLIC_INTERFACE
function Auth({ mode = "sign-in", onAuth, loading }) {
  // NOTE: This would integrate Firebase UI, currently a UI stub.
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields required.");
      return;
    }
    setError(null);
    if (onAuth) onAuth(email, password);
  };

  return (
    <div
      style={{
        background: "#fff",
        maxWidth: 420,
        margin: "80px auto",
        borderRadius: 14,
        boxShadow: "0 2px 14px rgba(0,0,0,0.08)",
        padding: 30,
        fontSize: 16,
      }}
    >
      <h2 style={{ color: "var(--secondary)", textAlign: "center" }}>
        {mode === "sign-up" ? "Sign up" : "Sign in"}
      </h2>
      <form onSubmit={submit} style={{ marginTop: 28 }}>
        <label style={{ display: "block", marginBottom: 12 }}>
          Email
          <input
            type="email"
            value={email}
            style={{
              display: "block",
              marginTop: 8,
              width: "100%",
              borderRadius: 7,
              border: "1px solid #eee",
              padding: "9px 12px",
              fontSize: 16,
              marginBottom: 18,
            }}
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label style={{ display: "block", marginBottom: 16 }}>
          Password
          <input
            type="password"
            value={password}
            style={{
              display: "block",
              marginTop: 8,
              width: "100%",
              borderRadius: 7,
              border: "1px solid #eee",
              padding: "9px 12px",
              fontSize: 16,
              marginBottom: 20,
            }}
            autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        {error && (
          <div style={{ color: "#FF0000", marginBottom: 18, fontSize: 15 }}>
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            background: "var(--primary)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            width: "100%",
            fontWeight: 600,
            fontSize: 16,
            padding: "12px 0",
            cursor: "pointer",
            opacity: loading ? 0.7 : 1,
          }}
          disabled={loading}
        >
          {mode === "sign-up" ? "Sign up" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default Auth;
