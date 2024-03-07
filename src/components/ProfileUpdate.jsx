import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import Blog from "./Blog";
import ProfileSide from "./ProfileSide";

function ProfileUpdate({ userName, userEmail, id }) {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div className="w-full  bg-main-color">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <ProfileSide userName={userName} userEmail={userEmail} id={id} />
            <Blog userName={userName} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
