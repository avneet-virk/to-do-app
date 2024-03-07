import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ProfileUpdate from "../components/ProfileUpdate";
import { auth } from "../firebase/firebase";
import "../styles/main.css";

function BlogScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [speed, setSpeed] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    await signOut(auth);
    navigate(`/`);
  };

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div>
      <Header
        userEmail={user?.email}
        logout={logout}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      <ProfileUpdate
        userName={user?.displayName}
        userEmail={user?.email}
        speed={speed}
        id={id}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default BlogScreen;
