import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./Calculator";
import DetailPage from "./detailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
