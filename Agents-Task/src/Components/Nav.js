import { NavLink } from "react-router-dom";
import {useContext} from 'react';
import context from "./Login";
function Nav(){
const logedin = useContext(context);
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
  <div className="container-fluid" style={{ textDecoration:" none" }}>
    <a className="navbar-brand" href="#" >Netflex</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item nav-link">
        <NavLink  to="/" style={({ isActive }) => 
                      (isActive ? {color: 'gray'} : {color: 'white'})}>Home</NavLink>
        </li>
        <li className="nav-item nav-link">
        <NavLink   style={({ isActive }) => 
           (isActive ? {color: 'gray'} : {color: 'white'})} to="/about">
              About
            </NavLink>
        </li>
        <li className="nav-item nav-link">
        <NavLink   style={({ isActive }) => 
           (isActive ? {color: 'gray'} : {color: 'white'})} to="/Add">
              Add Movie
            </NavLink>
        </li>
        <li className="nav-item nav-link active">
        <NavLink  to="/Movies" style={({ isActive }) => 
                      (isActive ? {color: 'gray'} : {color: 'white'})}>Movies</NavLink>
        </li>
        {logedin &&  <><li className="nav-item nav-link active">
        <NavLink  to="/Register" style={({ isActive }) => 
                      (isActive ? {color: 'gray'} : {color: 'white'})}>Register</NavLink>
        </li>
        <li className="nav-item nav-link active">
        <NavLink  to="/Login" style={({ isActive }) => 
                      (isActive ? {color: 'gray'} : {color: 'white'})}>Login</NavLink>
        </li> </>}
        {!logedin && <li className="nav-item nav-link active">
        <NavLink  to="/Logout" style={({ isActive }) => 
                      (isActive ? {color: 'gray'} : {color: 'white'})}>Logout</NavLink>
        </li> }
       

      </ul>
    </div>
  </div>
</nav>
    )
}
export default Nav ;

