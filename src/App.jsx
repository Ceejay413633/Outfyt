import Createacc from "./Components/Createacc";
import Signin from "./Components/Signin";
import { BrowserRouter, Route, Routes } from "react-router";
import Onboarding from "./Components/Onboarding";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#000000]">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Createacc />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
