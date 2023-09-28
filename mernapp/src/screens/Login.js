//   import React, { useState } from 'react'
//   import {Link,useNavigate} from 'react-router-dom';


// const Login = () => {


//   const [credentials,setcredentials]=useState({email:"",password:""})
//   let navigate=useNavigate()
//   const handleSubmit = async(e)=>{
//      e.preventDefault();
//      console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
//     const response =await fetch("http://localhost:5000/api/loginuser",{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({email:credentials.email,password:credentials.password})
//     });
//      const json = await response.json()
//      console.log(json);


//      if(!json.success)
//      {
//        alert("Enter Valid Credentials")
//      }
//      if(json.success)
//      {

//         localStorage.setItem("userEmail",credentials.email);
//         localStorage.setItem("authToken",json.authToken);
//         console.log(localStorage.getItem("authToken"))
//         navigate("/");  
//      }

//   }

//    const onChange=(event)=>{
//     setcredentials({...credentials,[event.target.name]:event.target.value})

//    }



//   return (
//     <div>
//        <>
//     <div className="container">
//       <form onSubmit={handleSubmit}>
  
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
  
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
//   </div>
  
//   <button type="submit" className="m-3 btn btn-success">Submit</button>
//   <Link to="/createuser" className="m-3 btn btn-danger">NEW USER ?</Link>
// </form>
// </div>
//     </>
    
//     </div>
//   )
// }

// export default Login








import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
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
    background: 'linear-gradient(to right, #73ebbf, #02bd78)', // gradient background

  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fainter white background
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '500px', // Increased width
    height: 'auto', // Adjusted height to auto
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    border: 'none',
    borderBottom: '2px solid #00785b', // Green color underline border
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: '18px',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#00bc8c', // Updated button color to green
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
    backgroundColor: '#00785b', // Darker green color on hover
  };

  const registerLinkStyle = {
    marginTop: '15px',
    fontSize: '16px',
    color: '#00bc8c', // Green color for the link
    textDecoration: 'none',
    display: 'block',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Login</h2>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
        <p style={registerLinkStyle}>
          New User? <Link to="/createuser" style={{ color: '#00785b', marginLeft :'40px' }}>Sign Up Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
