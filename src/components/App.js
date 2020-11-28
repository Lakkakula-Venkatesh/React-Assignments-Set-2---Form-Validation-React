import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [greetMessage, setGreetMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [allError, setAllError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [mailError, setMailError] = React.useState("");
  const [genderError, setGenderError] = React.useState("");
  const [numberError, setNumberError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleSubmit = () => {
    if(name === "" || mail === "" || gender === "" || number === "" || password === "") {
      setAllError("All fields are mandatory");
      return;
    }
    setAllError("");
    
    if(!mail.includes("@")) {
      setMailError("Email must contain @");
      return;
    }
    setMailError("");
    if(isNaN(number)) {
      setNumberError("Phone Number must contain only numbers");
      return;
    }
    setNumberError("");
    if(gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female" && gender.toLowerCase() !== "others") {
      setGenderError("Please identify as male, female or others");
      return;
    }
    setGenderError("");
    
    if(password.length < 6) {
      setPasswordError("Password must contain atleast 6 letters");
      return;
    }
    setPasswordError("");
    setGreetMessage(getName());
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
        <input data-testid = 'name' onChange={handleNameChange} required value={name}/>
        <input data-testid = 'email' onChange={handleMailChange} required value={mail} />
        <input data-testid = 'gender' onChange={handleGenderChange} required value={gender} />
        <input data-testid = 'phoneNumber' onChange={handleNumberChange} value={number} />
        <input data-testid = 'password' type='password' onChange={handlePasswordChange} value={password} />
        <input data-testid = 'submit' type="submit" onClick={handleSubmit} />
        {greetMessage !== "" && <div>{greetMessage}</div>}
        {allError !== "" && <div>{allError}</div>}
        {nameError !== "" && <div>{nameError}</div>}
        {mailError !== "" && <div>{mailError}</div>}
        {genderError !== "" && <div>{genderError}</div>}
        {numberError !== "" && <div>{numberError}</div>}
        {passwordError !== "" && <div>{passwordError}</div>}
      </div>
    </>
  );
}


export default App;
