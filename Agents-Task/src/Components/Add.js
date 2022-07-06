import React, { useState , useEffect} from "react";
import axios from "axios";
function Add() {
  const [Product_name , setmname] = useState("");
  const [describtion , setdescriptiona] = useState("");
  const [Price , setmPrice] = useState("");
  const add = () => {
    // console.log(movie_name)
    axios.post(
      `https://62c47caf7d83a75e39fb0ca3.mockapi.io/Shopping/`,
       { 
        Product_name,
        describtion,
        Price,
        
      }
     
    );
    alert("Succes");
    window.location.href = "http://localhost:3000/Movies";
  };
  
  

    return (
      <div className="container" style={{ color: "white" }}>
        <h1>Add Movie</h1>
       
          <div className="mb-3">
            <label className="form-label">Movie Name </label>
            <input
              type="text"
              className="form-control"
              name="movie_name"
              onChange={(e) => setmname(e.target.value)}
              
            />
            <br />
            <label className="form-label">Movie descriptiona </label>
            <input
              type="text"
              className="form-control"
              name="movie_description"
              onChange={(e) => setdescriptiona(e.target.value)}
            />
            <br />
            <label className="form-label">Movie Price</label>
            <input
              type="text"
              className="form-control"
              name="movie_gener"
              onChange={(e) => setmPrice(e.target.value)}
              
            />
            <br />
          
          </div>

          <button type="submit"   className="btn btn-danger" onClick={add}>
            Add
          </button>
       
      </div>
    );
  }


export default Add;