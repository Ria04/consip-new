import "./App.css";
import ParticlesComponent from "./components/particle";

import { Header } from "./components/header";
import { Card } from "./components/cards";
import { AboutUs } from "./components/about";
import { Expertise } from "./components/expertise";
import { Footer } from "./components/footer";
import { Cards } from "./components/cards";
function App() {
  return (
    <div className="App">
      <Header />
      <ParticlesComponent particleColor={"#ffffff"} />
      <div id="home" className="container1-contents">
        <div className="container">
          <div class="containerC">
            <div className="stack" style={{ "--stacks": 3 }}>
              <span style={{ "--index": 0 }}>THE AGE OF TRUST</span>
              <span style={{ "--index": 1 }}>THE AGE OF TRUST</span>
              <span style={{ "--index": 2 }}>THE AGE OF TRUST</span>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <AboutUs />
      <Expertise />
      <Footer />
      <div id="overlay"></div>
    </div>
  );
}

export default App;
