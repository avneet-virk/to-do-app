import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Login from "./login";
import Signin from "./signin";

function MainContain() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/home/${user?.uid}`);
    } else return;
  }, [user]);

  return (
    <div>
      {isSignIn ? (
        <Login setIsSignIn={setIsSignIn} />
      ) : (
        <Signin setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
}

export default MainContain;
