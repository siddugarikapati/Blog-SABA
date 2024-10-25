import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo}=useContext(UserContext);
  async function login(ev) {
    ev.preventDefault(); 

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
         response.json().then(userInfo=>{
            setUserInfo(userInfo);
            setRedirect(true); 
         })
       
      } else {
        // Handle error from the backend
        const errorData = await response.json(); // Get error details
        alert(errorData); // Display error message returned from backend
      }
    } catch (error) {
      console.error('Fetch error:', error); // Log fetch error
      alert('Failed to connect to the server. Please try again later.');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />; // Redirect to homepage
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
