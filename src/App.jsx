
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";




const App = () => {
  const [theme, setTheme] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard setTheme={setTheme} theme={theme} />}
        />
 
      </Routes> 
    </Router>
  );
};

export default App;
