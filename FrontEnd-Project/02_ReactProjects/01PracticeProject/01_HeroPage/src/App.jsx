import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Works from "./assets/Pages/Works";
import Blog from "./assets/Pages/Blog";
import Contact from "./assets/Pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
