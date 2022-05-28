import './App.css';
import {Route, Routes } from "react-router-dom";
import AboutComponent from "./pages/about/About";
import HomeComponent from "./pages/home/Home";
import MenuComponent from "./components/menu/Menu";
import FooterComponent from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <MenuComponent/>
      <Routes>
        <Route path="/about" element={<AboutComponent/>}/>
        <Route path="/" element={<HomeComponent/>}/>
      </Routes>
        <FooterComponent/>
    </div>
  );
}

export default App;
