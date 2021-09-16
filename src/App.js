import React, { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email
        && details.password === adminUser.password) {
          console.log("Logged in")
          setUser({
            name: details.name,
            email: details.email
          })
          setError("");
        } else {
          console.log("Details do not match");
          setError("Details do not match. Please try again.");
        }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <Router>
          <Navbar user={user} Logout={Logout}/>
        </Router>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
/** poops */
export default App;
