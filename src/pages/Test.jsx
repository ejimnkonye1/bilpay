
import { BrowserRouter as Router, Routes, Route, NavLink ,Link} from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";

const App = () => {

  return (
    <Router>
        <NavLink><Link to='/'>Home</Link> <Link to='/contact'>Contact</Link><Link to='/about'>About us</Link></NavLink>
      <Routes>
        <Route
          path="/"
          element={<Home  />}
        />
           <Route
          path="/contact"
          element={<Contact  />}
        />
             <Route
          path="/about"
          element={<About />}
        />
      </Routes> 
    </Router>
  );
};

export default App;
