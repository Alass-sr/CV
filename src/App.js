import React from "react";

import { Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    < Routes>
      < Route path="" element={<Home />} />
      < Route path="/competences" element={<Knowledges />} />
      < Route path="/contact" element={<Contact />} />
      < Route path="/portfolio" element={<Portfolio />} />
      < Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
