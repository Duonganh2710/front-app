import React, { useState} from "react";
import LoginForm from "./components/LoginForm";
import MainForm from "./components/MainForm";

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
    <MainForm/>
    // <div className='App'>
    //   {(user.email == "") ? (
    //     <MainForm/>

    //   ) : (
    //     <LoginForm Login={Login} error={error}/>   
    //   )
    //   }
    // </div>
  );
  
}

export default App;
