
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import { Trending } from "./pages/Treading";




const App = () => {
  const [theme, setTheme] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard setTheme={setTheme} theme={theme} />}
        />
 
    
      <Route
          path="/trending"
          element={<Trending setTheme={setTheme} theme={theme} />}
        />
          
      {/* <Route
          path="/trending"
          element={<Trending setTheme={setTheme} theme={theme} />}
        /> */}
 
      </Routes> 
    </Router>
  );
};

export default App;
