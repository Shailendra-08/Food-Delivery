import React from 'react'

import { Link,useNavigate } from 'react-router-dom'


export default function Navbar() {

  const navigate = useNavigate();


const handlelogout = ()=>{
  localStorage.removeItem("authToken");
  navigate("/login");

}



  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">Food-Panda</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>

              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
                </li>
                : ""}

              {/*         
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        

        <li className="nav-item">
          <Link className="nav-link" to="/createuser">Sign up</Link>
        </li>
        */}

            </ul>

            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex'>

                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success" to="/createuser">Sign up</Link>

              </div>
              : <div>

              <div className='btn bg-white text-success mx-2'>
               <b>My Cart</b> 
              </div>
              
              
              
              <div className='btn bg-white text-danger mx-2' onClick={handlelogout}>
                <b>Logout</b>
              </div>

              </div>
          }




          </div>
        </div>
      </nav>

    </div>
  )
}



// Control + shift + L to select a particular tag

// Control + shift + arrow key to change the selected code form one location to another in the editor screen