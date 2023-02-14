import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Projects from "./components/Projects";

function App() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
}, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <Header />
      <Bio />
      <Projects />
    </div>
  );
}

export default App;
