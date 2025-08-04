import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";
import VideoDetail from "./components/VideoDetail";
import Auth from "./components/Auth";
import Upload from "./components/Upload";

/**
 * PUBLIC_INTERFACE
 * Main app component for YouTube-like frontend.
 * - Uses environment variables for API endpoints and Firebase config (see .env.example).
 * - Handles simple routing between video pages, auth, and upload.
 * - Main color theme:
 *   --primary: #FF0000
 *   --secondary: #282828
 *   --accent: #606060
 */

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedNav, setSelectedNav] = useState("trending");
  const [route, setRoute] = useState("home"); // home, video, upload, auth
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [user, setUser] = useState(null); // Placeholder for authenticated user object
  const [videos, setVideos] = useState([]); // List of trending/recommended/subscribed videos
  const [authMode, setAuthMode] = useState("sign-in");

  // Effect to apply theme variable
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Initial fetch stub: replace with backend call.
  useEffect(() => {
    // Demo data; replace with REST API call
    setVideos([
      {
        id: "1",
        title: "Welcome to StreamView!",
        thumbnail: "https://placehold.co/480x270/282828/FF0000?text=StreamView",
        channel: "Kavia Demo Channel",
        views: 1245,
      },
      {
        id: "2",
        title: "Second Test Video",
        thumbnail: "https://placehold.co/480x270/606060/fff?text=Video+2",
        channel: "User123",
        views: 786,
      },
    ]);
  }, [selectedNav]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Stub auth management (replace with Firebase)
  // PUBLIC_INTERFACE
  const signIn = () => {
    setAuthMode("sign-in");
    setRoute("auth");
  };
  const signOut = () => setUser(null);

  // Simulate sign in - in actual app, setUser via Firebase
  // PUBLIC_INTERFACE
  const doAuth = (email, password) => {
    setTimeout(() => {
      setUser({
        displayName: email.split("@")[0],
        photoURL: "https://placehold.co/32x32/282828/fff?text=👤",
        email,
      });
      setRoute("home");
    }, 800);
  };

  // Sidebar navigation logic
  // PUBLIC_INTERFACE
  const handleNavigate = (key) => {
    setSelectedNav(key);
    setRoute(key === "upload" ? "upload" : "home");
    setSelectedVideo(null);
  };

  // Select video in grid
  // PUBLIC_INTERFACE
  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
    setRoute("video");
  };

  // Top-level layout
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Floating theme toggle button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        style={{
          zIndex: 90,
          position: "fixed",
          top: 20,
          right: 20,
        }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <Header
        onSearch={(query) => {
          // Placeholder: implement search logic
          alert(`Searching for "${query}" (not yet implemented)`);
        }}
        user={user}
        onSignIn={signIn}
        onSignOut={signOut}
      />
      <div style={{ display: "flex" }}>
        <Sidebar selected={selectedNav} onNavigate={handleNavigate} />
        <main style={{ flex: 1, background: "var(--bg-primary)", minHeight: "calc(100vh - 64px)" }}>
          {route === "auth" ? (
            <Auth mode={authMode} onAuth={doAuth} />
          ) : route === "video" && selectedVideo ? (
            <VideoDetail video={selectedVideo} onBack={() => setRoute("home")} />
          ) : route === "upload" ? (
            user ? (
              <Upload onUpload={() => {}} />
            ) : (
              <div style={{ padding: 48 }}>Please sign in to upload videos.</div>
            )
          ) : (
            <VideoGrid videos={videos} onSelect={handleSelectVideo} />
          )}
          {/* Future: <Routes/> with react-router-dom */}
        </main>
      </div>
    </div>
  );
}

export default App;
