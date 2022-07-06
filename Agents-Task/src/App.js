import {BrowserRouter, Routes,  Route} from 'react-router-dom'; //
import About from './Components/About';
import MovieList from './Components/MovieList';
import Singlemovie from './Components/Singlemovie';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Registration from './Components/Registeration';
import Login from './Components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logout from './Components/Logout';
import Add from './Components/Add';
function App() {
  return (
<BrowserRouter>
<div className='App'>
<Nav/>
<Routes>
<Route  path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/Movies" element={<MovieList/>}/>
<Route path="/Movie/:id" element={<Singlemovie/>}/>
<Route path="/Register" element={<Registration/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Logout" element={<Logout/>}/>
<Route path="/Add" element={<Add/>}/>
</Routes> 
</div>
</BrowserRouter>

   
  );
}

export default App;
