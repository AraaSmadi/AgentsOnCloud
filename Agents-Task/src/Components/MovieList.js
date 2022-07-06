import React,{useEffect , useState}  from "react";
import Singlemovie from './Singlemovie';
import { NavLink } from "react-router-dom";
document.body.style.backgroundColor = "black"; 
function MovieList(){
const[Movies , setMovies] = useState([]);
const[Load , setLoad] = useState(true);
useEffect(  ()=> {
  fetch('https://62c47caf7d83a75e39fb0ca3.mockapi.io/Shopping') 
.then((response)=> response.json())
.then(data => {setMovies(data);
    setLoad(false);
    console.log(data);
    });
    },[]);
const deleteed =(id)=>{
   fetch(`https://62c47caf7d83a75e39fb0ca3.mockapi.io/Shopping/${id}` , {method:'DELETE'})
    const newdata = Movies.filter((ep)=> ep.id !== id)
    setMovies(newdata);
 }
return (

<div className="row " >  {Load && <h1>Loading .  . . . .</h1>}
    {Movies.map(m =>(
 <div className="card col-md-4 mt-2">
 <div className="card-body">
 <img class='card-img-top' src={m.Image} height='300px' width='10px' />
 <h3 className="mb-2">{m.Product_name}</h3>
      <p className="card-text"> {m.describtion}</p>
      <p className="card-text"> {m.price}</p>
      <button className="btn btn-danger"  style={{ marginRight: "10px" }}>
      <NavLink  to={`/Movie/${m.id}`}  style={{ color: "white" , textDecoration:" none" }}>Show</NavLink>
      </button>
      <button className="btn btn-danger" onClick={() =>deleteed(m.id)}> Delete</button>
</div>
</div>)
    )
    }
    </div>
);

}
export default MovieList ; 
