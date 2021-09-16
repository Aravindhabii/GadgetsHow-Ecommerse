import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const Login = ({history}) => {
  const [email, setEmail] = useState("aravindhabii27@gmail.com");
  const [password, setPassword] = useState("1234567890");
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
      const result =await auth.signInWithEmailAndPassword(email, password)
      // console.log(result)
      const {user} = result
      const idTokenResult = await user.getIdTokenResult()
      dispatch({
        type: "LOGGED_IN-USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/")
    }catch(error){
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const loginForm = () => (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        autoFocus
      />
      <input
        type="password"
        className="form-control mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />
      <Button
        type="primary"
        className="mb-3"
        onClick={handleSubmit}
        block
        shape="round"
        size="large"
        disabled={!email || password.length < 6}
      >
        Login
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
