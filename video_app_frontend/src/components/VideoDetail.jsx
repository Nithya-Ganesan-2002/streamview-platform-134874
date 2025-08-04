import React from "react";

/**
 * Detailed page for a single video: video player, title, channel, comments, like/dislike, etc.
 * Accepts video object, handles API call stubs for actions.
 */
// PUBLIC_INTERFACE
function VideoDetail({ video, onBack }) {
  if (!video) {
    return <div style={{ padding: 48 }}>No video selected.</div>;
  }
  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <button
        style={{
          background: "none",
          border: "none",
          color: "var(--accent)",
          marginBottom: 18,
          fontWeight: 500,
          cursor: "pointer",
        }}
        onClick={onBack}
      >
        &larr; Back
      </button>
      <div
        style={{
          background: "#000",
          width: "100%",
          height: 420,
          borderRadius: 16,
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 28,
          fontWeight: 600,
        }}
      >
        {/* Placeholder for REAL video playback */}
        [Video Player]
      </div>
      <h2 style={{ margin: 0, color: "var(--secondary)" }}>{video.title}</h2>
      <div style={{ margin: "10px 0", color: "var(--accent)" }}>
        {video.channel} &middot; {video.views} views
      </div>
      <div style={{ margin: "16px 0", display: "flex", gap: 16 }}>
        {/* Like/Dislike placeholders */}
        <button style={{
          background: "var(--accent)",
          border: "none",
          borderRadius: 16,
          padding: "6px 18px",
          color: "#fff",
          fontWeight: 500,
          fontSize: 16,
          cursor: "pointer",
        }}>
          👍 Like
        </button>
        <button style={{
          background: "#ccc",
          border: "none",
          borderRadius: 16,
          padding: "6px 18px",
          color: "#222",
          fontWeight: 500,
          fontSize: 16,
          cursor: "pointer",
        }}>
          👎 Dislike
        </button>
      </div>
      <section style={{ marginTop: 30 }}>
        <h4 style={{ margin: "16px 0" }}>Comments</h4>
        {/* Placeholder for comment list and input */}
        <div style={{
          background: "#f5f5f5",
          borderRadius: 12,
          padding: 18,
        }}>
          <div style={{ color: "#888", fontSize: 15 }}>
            (Comment system coming soon)
          </div>
        </div>
      </section>
    </main>
  );
}

export default VideoDetail;
