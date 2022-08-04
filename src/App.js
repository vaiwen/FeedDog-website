import './App.css';

import Contents from './components/Contents';
import Footer from './components/Footer';
import Ghost from './components/Ghost';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Ghost />
      <MainContent />
      <Slider />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
