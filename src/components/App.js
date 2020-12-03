import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = () => {
    if(name === "" || mail === "" || gender === "" || number === "" || password === "") {
      setMessage("All fields are mandatory");
      return;
    }
    if(!(/[a-z][0-9]/i.test(name))) {
      setMessage("Name is not alphanumeric");
      return;
    }
    if(!mail.includes("@")) {
      setMessage("Email must contain @");
      return;
    }
    if(isNaN(number)) {
      setMessage("Phone Number must contain only numbers");
      return;
    }
    if(gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female" && gender.toLowerCase() !== "others") {
      setMessage("Please identify as male, female or others");
      return;
    }    
    if(password.length < 6) {
      setMessage("Password must contain atleast 6 letters");
      return;
    }
    setMessage(getName());
  }
  const getName = () => {
    return "Hello " +  mail.split("@")[0];
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleMailChange = (e) => {
    setMail(e.target.value);
  }
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  }
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  return (
    <>
      <div id="main">
        <input data-testid = 'name' onChange={handleNameChange} required value={name}/><br />
        <input data-testid = 'email' onChange={handleMailChange} required value={mail} /><br />
        <input data-testid = 'gender' onChange={handleGenderChange} required value={gender} /><br />
        <input data-testid = 'phoneNumber' onChange={handleNumberChange} value={number} /><br />
        <input data-testid = 'password' type='password' onChange={handlePasswordChange} value={password} /><br />
        <input data-testid = 'submit' type="submit" onClick={handleSubmit} />
        <div>{message}</div>
      </div>
    </>
  );
}


export default App;