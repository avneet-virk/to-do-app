import React, { useState } from "react";

function ProfileSide({
  userName,
  userEmail,
  speed,
}) {
 
  return (
    <div className="bg-gray-400  p-3 border-t-4 border-green-400">
    <div className="image overflow-hidden">
      <img
        className="h-auto w-full mx-auto rounded-full"
        src={`https://avatars.dicebear.com/api/avataaars/${speed}.svg`}
        alt=""
      />
    </div>
    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
      {userName}
    </h1>
    <h3 className="text-gray-600 font-lg text-semibold leading-6">
      {userEmail}
    </h3>
    <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
      <li className="flex items-center py-3">
        <span>Status</span>
        <span className="ml-auto">
          <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
            Active
          </span>
        </span>
      </li>
    </ul>
  </div>
  );
}

export default ProfileSide;
