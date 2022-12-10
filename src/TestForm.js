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
    <form onSubmit={handleSubmit} style={{ width: "65%" }}>
      <div style={{ marginTop: "auto", marginBottom: "auto" }}>
        <label
          style={{
            fontFamily: "Raleway",
            fontSize: 18,
            display: "block",
            marginTop: "25px",
          }}>
          First Name:
        </label>
        <input
          style={{ marginBottom: "25px" }}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <br />
        <label
          style={{ fontFamily: "Raleway", fontSize: 18, display: "block" }}>
          Last Name:
        </label>
        <input
          style={{ marginBottom: "25px" }}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <br />
        <label
          style={{ fontFamily: "Raleway", fontSize: 18, display: "block" }}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ marginBottom: "25px" }}
        />

        <br />
        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontFamily: "Raleway",
            width: "150px",
            border: "1px solid #fff",
            height: "25px",
          }}
        />
        <br />
        <br />
        {/* Render the full name and URL string on the page */}
        <p style={{ fontFamily: "Raleway", fontSize: 20, fontWeight: "600" }}>
          Full Name:
        </p>
        <p style={{ fontFamily: "Raleway", fontSize: 16 }}>
          {displayData.fullName}
        </p>
        <br />
        <p style={{ fontFamily: "Raleway", fontSize: 20, fontWeight: "600" }}>
          URL String:
        </p>
        <p style={{ fontFamily: "Raleway", fontSize: 16 }}>
          {displayData.urlString}
        </p>
      </div>
    </form>
  );
}
