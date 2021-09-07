import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useState(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const completeRegistrationForm = () => (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control mb-4"
        value={email}
        disabled
      />
      <input
        type="password"
        className="form-control mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        autoFocus
      />
      <button type="submit" className="btn btn-primary">
        Complete Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
