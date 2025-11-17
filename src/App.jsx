import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BuilderPage from "./pages/BuilderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="*" element={<Navigate to="/builder" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
