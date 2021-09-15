import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";


const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    console.log(window.location.href);

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validation
    // if (!email || !password) {
    //   toast.error('Email and password is rquired');
    //   return;
    // }
    
    // if (!email || !password) {
    //   toast.error('Passwor must be at least 6 characters long');
    //   return;
    // }
    try{
      const result = await auth.signInWithEmailLink(email, window.location.href)
      // console.log('Result', result)
      if (result.user.emailVerified) {
        //removal of user email from local storage
        window.localStorage.removeItem("emailForRegistration")
        //get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTockenResult = await user.getIdTokenResult()
        //populate in redux store
          // console.log('user', user, 'idTockenResult', idTockenResult);
        //redirect
        history.push('/')
      }
    }
     catch(error){
      console.log(error);
      toast.error(error.message)
    }
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
