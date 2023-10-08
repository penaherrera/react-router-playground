import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route
          path="testing"
          element={
            <div>
              <h2>testing</h2>
            </div>
          }
        />
        <Route
          path="home"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route
          path="about"
          element={
            <div>
              <About />
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div>
              <Error />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
