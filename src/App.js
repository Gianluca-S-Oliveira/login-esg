import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/containers/Home/home"; // Importe o componente da outra página
import Login from "../src/containers/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
