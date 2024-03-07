import React from "react";
import MainContain from "./pages/mainContain";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import BlogScreen from "./pages/blogScreen";

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={ <MainContain />}/>
            <Route path="/home/:id" element={ <BlogScreen />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
