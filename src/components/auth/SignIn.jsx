import { useState } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (e) => {
    // Firebase stuff...
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.uid;
        console.log(user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
      });
  };
  return (
    <div className="absolute top-1/2 left-1/2 w-400 p-10 mx-auto mt-5 -translate-x-1/2 -translate-y-55 bg-transparent backdrop-blur-3 box-border shadow-md rounded-10">
      <p className="mb-8 pb-0 text-black text-center text-lg font-bold tracking-wider">
        Log In to your account
      </p>
      <form onSubmit={singIn}>
        <div className="relative">
          <input
            className="w-full py-2 px-0 text-16 text-white mb-8 border-none border-b-1 outline-none bg-transparent"
            required="true"
            name=""
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="">Email</label>
        </div>
        <div class="user-box">
          <input
            className="w-full py-2 px-0 text-16 text-white mb-8 border-none border-b-1 outline-none bg-transparent"
            required="true"
            name=""
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
