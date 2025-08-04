import React from "react";

/**
 * Video Upload Placeholder with file input for authenticated users.
 */
// PUBLIC_INTERFACE
function Upload({ onUpload }) {
  const [file, setFile] = React.useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Placeholder: call onUpload(file) when integrated.
    alert("Upload feature is coming soon!");
  };

  return (
    <main style={{ maxWidth: 400, margin: "80px auto", padding: 24 }}>
      <h2 style={{ color: "var(--secondary)", marginBottom: 24 }}>
        Upload a new video
      </h2>
      <input
        type="file"
        accept="video/*"
        style={{ display: "block", marginBottom: 24 }}
        onChange={handleFileChange}
      />
      <button
        style={{
          background: "var(--primary)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          width: "100%",
          fontWeight: 600,
          fontSize: 16,
          padding: "12px 0",
          cursor: "pointer"
        }}
        disabled={!file}
        onClick={handleUpload}
      >
        Upload
      </button>
      <div style={{ color: "var(--accent)", marginTop: 20 }}>
        (Full video upload feature coming soon)
      </div>
    </main>
  );
}

export default Upload;
