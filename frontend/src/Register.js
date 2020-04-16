import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
// import YodlrApi from "./YodlrApi";

function Register() {
  const history = useHistory();
  const [registerData, setRegisterData] = useState({ email: ""});

  const handleSubmit = async evt => {
    evt.preventDefault();

    try {
      // await YodlrApi.register(registerData);
    } catch (errors) {
      return setRegisterData(registerData => ({ ...registerData, errors }));
    }

    history.push("/admin");
  }
  const handleChange = evt => {
    const { name, value } = evt.target;
    setRegisterData(registerData => ({
      ...registerData,
      [name]: value
    }));
  };
  

  return (
    <>
      <h1>Yodlr Registration Portal</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            className="form-control"
            value={registerData.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
      <Link to="/admin" className="btn btn-primary font-weight-bold">Admin Page</Link>
    </>
  );
}

export default Register;