import React,{useState} from "react";



const Register = () => {
    const[email,setEmail]= useState('')
const handleSubmit =() =>{
    //
}

const registerForm = () => <form action="" onSubmit={handleSubmit}>
    <input type="email"className='form-control' value={email} onChange={e=>console.log(e.target.value)} />
</form> ;

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
