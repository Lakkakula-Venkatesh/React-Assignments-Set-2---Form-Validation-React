import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [gender, setGender] = useState("male");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = () => {
    if(!name.trim() || !mail.trim() || !gender.trim() || !number.trim() || !password.trim()) {
      setMessage("All fields are mandatory");
      return;
    }
    if(!(/[a-z ][0-9]/i.test(name))) {
      setMessage("Name is not alphanumeric");
      return;
    }
    if(!mail.includes("@")) {
      setMessage("Email must contain @");
      return;
    }
    if(isNaN(number) || number.includes(".")) {
      setMessage("Phone Number must contain only numbers");
      return;
    }
    if(password.length < 6) {
      setMessage("Password must contain atleast 6 letters");
      return;
    }
    if(gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female" && gender.toLowerCase() !== "others") {
      setMessage("Please identify as male, female or others");
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
        <input data-testid = 'name' onChange={(event) => setName(event.target.value)} required value={name}/><br />
        <input data-testid = 'email' onChange={(event) => setMail(event.target.value)} required value={mail} /><br />
        <input data-testid = 'gender' onChange={(event) => setGender(event.target.value)} required value={gender} /><br />
        <input data-testid = 'phoneNumber' onChange={(event) => setNumber(event.target.value)} value={number} /><br />
        <input data-testid = 'password' type='password' onChange={(event) => setPassword(event.target.value)} value={password} /><br />
        <input data-testid = 'submit' type="submit" onClick={handleSubmit} />
        {message !== "" && <div>{message}</div>}
      </div>
    </>
  );
}


export default App;