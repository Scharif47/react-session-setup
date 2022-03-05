import "./App.css";
import {Routes, Route} from "react-router-dom"
import Login from "./pages/login"
import Admin from "./pages/admin"

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
