import React from "react";

import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}
//1. Take a good amount of time to use the form. Find out what behaviors you expect, and any you don't expect.
//some inputs don't have ids, limit on firstname is too small, placeholders are weird, requires firstname, lastname, and email. throws errors for missing required fields, error for incorrect email format
//2. Write down on a peice of paper what you want to test. (This is a very important step - always plan before coding!)
//I could test if all inputs have ids, palceholders
//test for error messages
//check if the submit button prints the data 
