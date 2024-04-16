import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Email from './components/Email';
function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Skills/>
      <Projects/>
      <Email></Email>
    </div>
  );
}

export default App;
