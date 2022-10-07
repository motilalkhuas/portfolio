import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path = "/about" element={<About/>} />
          <Route exact path = "/skills" element={<Skills/>} /> */}
        {/* <Route exact path = "/" element={<home/>} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;