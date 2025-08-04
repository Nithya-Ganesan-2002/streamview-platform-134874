import React from "react";

/**
 * Main content area showing grid/list of videos (trending, recommended, etc).
 * Accepts an array of video objects with { id, title, thumbnail, channel, views }
 */
// PUBLIC_INTERFACE
function VideoGrid({ videos, onSelect }) {
  if (!Array.isArray(videos) || videos.length === 0) {
    return (
      <div style={{ padding: 48, textAlign: "center", color: "var(--accent)" }}>
        No videos to show.
      </div>
    );
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 32,
        padding: 32,
      }}
    >
      {videos.map((video) => (
        <div
          key={video.id}
          onClick={() => onSelect && onSelect(video)}
          style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            cursor: "pointer",
            overflow: "hidden",
            border: "1px solid var(--border-color)",
            transition: "box-shadow 0.17s",
          }}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            style={{ width: "100%", height: 168, objectFit: "cover" }}
          />
          <div style={{ padding: 18 }}>
            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              margin: "0 0 6px 0",
              color: "var(--secondary)",
            }}>
              {video.title}
            </h3>
            <div
              style={{
                fontSize: 13,
                color: "var(--accent)",
                marginBottom: 4,
              }}
            >
              {video.channel}
            </div>
            <div style={{ fontSize: 13, color: "#777" }}>
              {video.views} views
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
