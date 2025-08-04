import React from "react";

/**
 * Sidebar navigation for main app sections
 * (Trending, Recommended, Subscriptions, Channels, Upload, etc)
 */
// PUBLIC_INTERFACE
function Sidebar({ selected, onNavigate }) {
  const navItems = [
    { key: "trending", label: "Trending" },
    { key: "recommended", label: "Recommended" },
    { key: "subscriptions", label: "Subscriptions" },
    { key: "upload", label: "Upload" },
  ];

  return (
    <aside
      style={{
        minWidth: 200,
        background: "var(--secondary)",
        color: "#fff",
        height: "100vh",
        borderRight: "1.5px solid var(--border-color)",
        paddingTop: 32,
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 32px",
                  background: selected === item.key
                    ? "rgba(255,0,0,0.13)"
                    : "none",
                  color: selected === item.key
                    ? "var(--primary)"
                    : "#fff",
                  border: "none",
                  fontSize: 17,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={() => onNavigate(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
