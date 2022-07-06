import React,{useEffect , useState}  from "react";
import {useParams} from "react-router-dom";
function Singlemovie(){
const {id} = useParams();
const[Movies , setMovies] = useState([]);
useEffect(  ()=> {
    fetch(`https://62c47caf7d83a75e39fb0ca3.mockapi.io/Shopping/${id}`) 
  .then((response)=> response.json())
  .then(data => {setMovies(data);
      console.log(data);
      });
      });
return (
  <div class="container-xxl py-6" style={{ color: "white" }}>
  <div class="container">
      <div class="row g-5">
          <div class="col-lg-5 wow fadeInUp pt-5" data-wow-delay="0.1s">
              <div class="h-100">
                  <h1 class="display-6 mb-4"> {Movies.Product_name}</h1>
                  <p> {Movies.describtion} </p>
                  <p>{Movies.price}</p>
                  <p class="mb-4"> Also, Rh-negative blood is given to Rh-negative patients, and Rh-positive
                      or Rh-negative blood may be given to Rh-positive patients. The rules for plasma are the
                      reverse.<br/>
                      The typical donation is one pint of whole blood, but special equipment allows us to collect
                      parts of your blood separately (a process called apheresis). The information below shows how
                      these individual blood components often help specific patients.

                      You can make the greatest impact by giving the recommended donation based on your blood type.
                      Patients in need will be grateful for whatever type of donation you make!
                  </p>
              </div>
          </div>
          <div class="col-lg-7  wow fadeInUp" data-wow-delay="0.5s">
              <div class="position-relative overflow-hidden   ">
              <img src={Movies.Image}/>
              </div>
          </div>
      </div>
  </div>
</div>

  
);

}
export default Singlemovie ; 