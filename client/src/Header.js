import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { UserContext } from "./userContext";
import { PiGithubLogoFill } from "react-icons/pi";
import { ImBlog } from "react-icons/im";


export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext); 
  const navigate = useNavigate(); 

  
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include', 
    })
      .then(response => response.json())
      .then(userInfo => {
        setUserInfo(userInfo); 
      });
  }, [setUserInfo]);

 
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include', 
      method: 'POST', 
    })
      .then(() => {
        setUserInfo(null); 
        navigate('/login'); 
      });
  }

  const username = userInfo?.username;

  return (
    <header>
     <Link to="/" className="logo">
  <ImBlog className="blog-logo " />
  <img
    src="https://see.fontimg.com/api/rf5/BLXDd/YzZjYWJmMmE0ZGZkNGY3NmE5M2VlMGNhNmFkZWIzOTgub3Rm/U0FCQQ/nocture-free-regular.png?r=fs&h=44&w=1250&fg=000000&bg=FFFFFF&tb=1&s=35"
    alt="Horror fonts"
    className="font-image"
  />
  
</Link>



      <nav>
        {username ? (
          <>
            <Link to="/create">Create new post</Link> 
            <a onClick={logout} style={{ cursor: 'pointer' }}><strong>Logout</strong></a> 
          </>
        ) : (
          <>
            <Link to="/login"><strong>
            Login</strong></Link> 
            <Link to="/register"><strong>Register</strong></Link> 
          </>
        )}
      </nav>
    </header>
  );
}

