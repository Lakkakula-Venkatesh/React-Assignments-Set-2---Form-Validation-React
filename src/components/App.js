import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState([
    {
      name: "",
      email: "",
      gender: "male",
      number: "",
      password: ""
    }
  ]);
  const handleSubmit = () => {
    let main = input[0];
    let nameCopy = main["name"].toLowerCase().trim();
    let mailCopy = main["email"].toLowerCase().trim();
    let passwordCopy = main["password"];
    let genderCopy = main["gender"];
    let numberCopy = main["number"];
    if (nameCopy === "" || mailCopy === "" || passwordCopy === "" || genderCopy === "" || numberCopy === "") {
      setMessage("All fields are mandatory");
      return;
    }
    let alphabetCount = 0;
    let numericCount = 0;
    for (let i = 0; i < nameCopy.length; i++) {
      if (nameCopy[i] >= "a" && nameCopy[i] <= "z") {
        ++alphabetCount;
      } else if (nameCopy[i] >= 0 && nameCopy[i] <= 9) {
        ++numericCount;
      }
      if (alphabetCount && numericCount) {
        break;
      }
    }
    if (mailCopy.includes("@")=== false) {
      setMessage("Email must contain @");
      return;
    }
    
    if (!alphabetCount || !numericCount) {
      setMessage("Name is not alphanumeric");
      return;
    }

    if (isNaN(numberCopy)) {
      setMessage("Phone Number must contain only numbers");
      return;
    }
    if (passwordCopy.length < 6) {
      setMessage("Password must contain atleast 6 letters");
      return;
    }
    setMessage("Hello " + mailCopy.substr(0, mailCopy.indexOf("@")));
  };
  const handleChange = (e) => {
    let dup = input;
    dup = dup[0];
    dup[e.target.name] = e.target.value;
    setInput([dup]);
  };
  return (
    <div id="main">
      {message !== "" && <div>{message}</div>}
      <label>Name:</label>
      <input data-testid="name" name="name" onChange={handleChange} /><br />
      <label>Email address:</label>
      <input data-testid="email" name="email" onChange={handleChange} /><br />
      <label>Gender:</label>
      <input value="male" data-testid="gender" name="gender" onChange={handleChange}/><br />
      <label>Phone number:</label>
      <input data-testid="phoneNumber" name="number" onChange={handleChange} />
      <br />
      <label>Password:</label>
      <input data-testid="password" type="password" name="password" onChange={handleChange}/><br />
      <button data-testid="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;