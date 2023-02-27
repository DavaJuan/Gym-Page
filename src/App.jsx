import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Planes from './Components/Planes/Planes';
import Contacto from './Components/Contacto/Contacto';
import Ubicacion from './Components/Ubicacion/Ubicacion';
import Footer from './Components/Footer/Footer';
import AllClases from './Components/AllClases/AllClases';
import './App.css';
import Musculacion from './Components/AllClases/Cada Clase/Musculacion/Musculacion';
import FooterDos from './Components/FooterDos/FooterDos';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/clases' component={AllClases}/>
        <Route exact path='/planes' component={Planes}/>
        <Route exact path='/contacto' component={Contacto}/>
        <Route exact path='/ubicacion' component={Ubicacion}/>
        <Route exact path='/musculacion' component={Musculacion}/>
        <Footer />
        <FooterDos />
      </div>
    </BrowserRouter>
  );
}

export default App;
