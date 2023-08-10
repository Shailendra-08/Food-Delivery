import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {

    const [credentials, setcredentials] = useState({name:"",email:"",geolocation:"",password:""})
    const handleSubmit =async(e)=>{

        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}
        )});

        const json = await response.json();
        console.log(json);
        if(json.message!=="Data Inserted"){
            alert("Enter valid credentials");
        }

    }

    const onChange=(event)=>{
        console.log(event.target.value,event.target.name,credentials);
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }



  return (
    <>

    <div className='container'>


<form onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control"  name='name' value={credentials.name} onChange={onChange} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}  name='email' value={credentials.email} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange} name='password' value={credentials.password}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="address" className="form-control" id="exampleInputPassword1" onChange={onChange} name='geolocation' value={credentials.geolocation}/>
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">All ready a user?</Link>
</form>
</div>
      
    </>
  )
}
