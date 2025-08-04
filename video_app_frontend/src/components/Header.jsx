import React from "react";

/**
 * Header with app logo, search bar, and user authentication/menus.
 * Modern, minimal, light theme.
 */
// PUBLIC_INTERFACE
function Header({ onSearch, user, onSignIn, onSignOut }) {
  const [query, setQuery] = React.useState("");
  // Handles search bar input and submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        background: "var(--secondary)",
        color: "#fff",
        padding: "0 24px",
        height: "64px",
        borderBottom: "1.5px solid var(--border-color)",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: 22,
          letterSpacing: 1,
          color: "var(--primary)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span role="img" aria-label="play" style={{ marginRight: 8 }}>
          ▶️
        </span>
        StreamView
      </div>

      <form
        style={{
          flex: 1,
          margin: "0 32px",
          maxWidth: 500,
          display: "flex",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          aria-label="Search videos"
          style={{
            width: "100%",
            height: 40,
            borderRadius: 20,
            border: "none",
            outline: "none",
            padding: "0 16px",
            background: "#fff",
            color: "var(--secondary)",
            fontSize: 16,
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: 12,
            background: "var(--primary)",
            border: "none",
            color: "#fff",
            borderRadius: 20,
            padding: "0 18px",
            height: 36,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      <div>
        {user ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={user.photoURL}
              alt="profile"
              style={{
                width: 32, height: 32, borderRadius: "50%", marginRight: 8,
              }}
            />
            <span style={{ marginRight: 8 }}>{user.displayName}</span>
            <button
              onClick={onSignOut}
              style={{
                background: "none",
                border: "1px solid var(--primary)",
                color: "var(--primary)",
                borderRadius: 14,
                padding: "2px 12px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            onClick={onSignIn}
            style={{
              background: "var(--primary)",
              border: "none",
              color: "#fff",
              borderRadius: 14,
              padding: "8px 22px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
