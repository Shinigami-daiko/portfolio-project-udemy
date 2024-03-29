import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/services";
import Works from "./Components/Works/works";

import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
