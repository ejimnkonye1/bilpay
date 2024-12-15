
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import Test from "./test";



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
          path="/te"
          element={<Test setTheme={setTheme} theme={theme} />}
        />
      </Routes> 
    </Router>
  );
};

export default App;
