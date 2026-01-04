import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Experience from "./pages/experience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
