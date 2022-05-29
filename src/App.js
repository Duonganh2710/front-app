import React, { useState} from "react";
import LoginForm from "./components/LoginForm";
import MainForm from "./components/MainForm";
import NavBar from "./components/NavBar/NavBar";
import { FcAddDatabase } from "react-icons/fc";
import {Link} from "react-router-dom";
function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "123456"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email != adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
        password: details.password
      });
    }else{
      console.log("Detail do not match!");
    }
  }

  const Logout = () => {
    setUser({
      name: "",
      email: "",
      password: ""
    });
  }
  return (
    <div className='App'>
      <MainForm/>
      {(user.email == "") ? (
        <div className="welcome">
          
          {/* <h1>Hello</h1>
          <button onClick={Logout}>Logout</button> */}
          
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>   
      )
      }
    </div>
  );
  
}

export default App;
