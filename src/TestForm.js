import React, { useState } from "react";

export default function TestForm() {
  // Use the useState hook to manage the form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Use the useState hook to manage the rendered values
  const [displayData, setDisplayData] = useState({
    fullName: "",
    urlString: "",
  });

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Combine the first and last name
    const fullName = formData.firstName + " " + formData.lastName;

    // Join the form values into a URL string
    const urlString =
      "?firstName=" +
      encodeURIComponent(formData.firstName) +
      "&lastName=" +
      encodeURIComponent(formData.lastName) +
      "&email=" +
      encodeURIComponent(formData.email);

    // Update the displayData state with the full name and URL string
    setDisplayData({
      fullName: fullName,
      urlString: urlString,
    });

    // TODO: Add code to submit the form data and URL string to a server
  }

  // Function to handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
      <br />
      <br />
      {/* Render the full name and URL string on the page */}
      <p>
        Full Name: {displayData.fullName}
        <br />
        URL String: {displayData.urlString}
      </p>
    </form>
  );
}
