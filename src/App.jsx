import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import SingleRestaurent from "./pages/SingleRestaurent";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto px-6 py-3 flex justify-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurent/:resID" element={<SingleRestaurent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
