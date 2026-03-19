import React from "react";

function PersonalForm({ personalData, setPersonalData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonalData({
      ...personalData,
      [name]: value
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onloadend = () => {
        setPersonalData({
          ...personalData,
          photo: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>

      <h2>Personal Details</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={personalData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={personalData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={personalData.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={personalData.location}
        onChange={handleChange}
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={personalData.summary}
        onChange={handleChange}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handlePhoto}
      />

    </div>
  );
}

export default PersonalForm;