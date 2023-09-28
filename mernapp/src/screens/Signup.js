// import React, { useState } from 'react'
// import {Link} from 'react-router-dom';


// export default function Signup() {

//   const [credentials,setcredentials]=useState({name:"",email:"",password:"",geolocation:""})

//   const handleSubmit = async(e)=>{
//      e.preventDefault();
//      console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,geolocation:credentials.geolocation}))
//     const response =await fetch("http://localhost:5000/api/createuser",{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
//     });
//      const json = await response.json()
//      console.log(json);


//      if(!json.success)
//      {
//        alert("Enter Valid Credentials")
//      }

//   }

//    const onChange=(event)=>{
//     setcredentials({...credentials,[event.target.name]:event.target.value})

//    }


//   return (
//     <>
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//     <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control" name='name' value={credentials.name}  onChange={onChange}/>
//     </div>
  
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
  
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
//   </div>
  
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
//     <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}  id="exampleInputPassword1"/>
//   </div>
  
//   <button type="submit" className="m-3 btn btn-success">Submit</button>
//   <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
// </form>
// </div>
//     </>
//   )
// }






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', geolocation: '' });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, geolocation: credentials.geolocation }));
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert('Enter Valid Credentials');
    }
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('authToken', json.authToken);
      console.log(localStorage.getItem('authToken'));
      navigate('/');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #73ebbf, #02bd78)',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    border: 'none',
    borderBottom: '2px solid #00785b',
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: '18px',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#00bc8c',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '14px',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  };

  buttonStyle[':hover'] = {
    backgroundColor: '#00785b',
  };

  const loginLinkStyle = {
    marginTop: '10px',
    fontSize: '16px',
    color: '#00bc8c',
    textDecoration: 'none',
    display: 'block',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            style={inputStyle}
            name="name"
            value={credentials.name}
            onChange={onChange}
            placeholder="Name"
            required
          />

          <input
            type="email"
            style={inputStyle}
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            style={inputStyle}
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
            required
          />

          <input
            type="text"
            style={inputStyle}
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
            placeholder="Address"
          />

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>
        <p style={loginLinkStyle}>
          Already a user? <Link to="/login" style={{ color: '#00785b', marginLeft :'40px' }}>Login Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
