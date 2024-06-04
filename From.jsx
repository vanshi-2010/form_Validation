import React, { useState } from 'react';
import './Form.css';
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, you can submit the form here or navigate to another route
      setSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };
  
  const validateForm = (formData) => {
    const errors = {};
    // Validation logic for required fields
    for (const key in formData) {
      if (!formData[key].trim()) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    }
    // Additional validation logic (e.g., email format, phone number format, etc.)
    // Add more validation rules as needed
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    if (!formData.country.trim()) {
      errors.country = 'Country is required';
    }
    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }
    if (!formData.panNo.trim()) {
      errors.panNo = 'Pan No. is required';
    }
    if (!formData.aadharNo.trim()) {
      errors.aadharNo = 'Aadhar No. is required';
    }
    return errors;
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const countryOptions = ['USA', 'Canada', 'UK', 'Australia', 'China', 'India', 'Indonesia', 'Brazil', 'Bangladesh', 'Russia', 'Mexico'];
  const cityOptions = {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    UK: ['London', 'Manchester', 'Birmingham'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane'],
    China: ['Beijing', 'Shanghai', 'Guangzhou'],
    India: ['Bangalore','Bhubaneshwar', 'Chandigarh', 'Delhi', 'Gandhinagar', 'Kolkata', 'Mumbai','Pune', 'Patna', 'Ranchi','Shimla', 'Shillong', 'Surat'],
    Indonesia: ['Bandung', 'Bali', 'Jakarta', 'Surabaya'],
    Brazil: ['Brasília', 'Rio de Janeiro', 'São Paulo'],
    Bangladesh: ['Chittagong', 'Dhaka', 'Khulna'],
    Russia: ['Novosibirsk', 'Moscow', 'Saint Petersburg'],
    Mexico: ['Guadalajara', 'Mexico City', 'Monterrey']
  };
  return (
    <div className='form-container'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>UserName:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
          <button type="button" onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'}</button>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div>
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {cityOptions[formData.country] && cityOptions[formData.country].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div>
          <label>Pan Number:</label>
          <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
          {errors.panNo && <span className="error">{errors.panNo}</span>}
        </div>
        <div>
          <label>Aadhar Number:</label>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
          {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h3>Submitted Details:</h3>
          <ul>
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Form;

