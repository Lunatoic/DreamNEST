import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/Register.scss";

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="register_content">
        <form action="">

        <input
            placeholder="First Name"
            name="firstName"
            // value={formData.firstName}
            // onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            // value={formData.lastName}
            // onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            type="password"
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            // value={formData.confirmPassword}
            // onChange={handleChange}
            type="password"
            required
          />
          <input 
          id="image"
          type="file" 
          name="profileImage"
          accept="image/*"
          style={{display:"none"}}
          required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label>

          <button type="submit">REGISTER</button>

        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
      
    </div>
  );
};

export default RegisterPage;
