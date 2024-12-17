import logo from './logo.svg';
import './App.css';
import  {NavBar} from './components/NavBar';
import  {Banner} from './components/Banner';
import  {About} from './components/About';
import  {SliderBanner} from './components/SliderBanner';
import  {Contact} from './components/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <SliderBanner/>
      <Contact/>
      {/* <section className="footer-img"/> */}
    </div>
  );
}

export default App;
