import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
export function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-cyan-900 to-teal-900 relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navigation />
          <main className="min-h-[calc(100vh-8rem)]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
