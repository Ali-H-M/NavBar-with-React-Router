import Navbar from "./Navbar"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import AllForms from "./pages/AllForms"
import MemeGenerator from "./pages/MemeGenerator"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allForms" element={<AllForms />} />
          <Route path="/memeGenerator" element={<MemeGenerator />} />
        </Routes>
      </div>
      </>
  )
}

export default App