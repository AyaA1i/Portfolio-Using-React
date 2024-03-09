import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
