import React from "react";
import PersonIcon from "@mui/icons-material/Person";

function Header({ userEmail, logout, setIsOpen, isOpen }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-gray-900  relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <a
              className="nav-link block pr-2 lg:px-2 py-2 font-bold text-2xl cursor-pointer text-gray-300 hover:text-gray-400 focus:text-gray-700"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              To Do App
            </a>
          </div>
          <div className="relative">
          <PersonIcon
            className="mr-5 cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen ? (
            <div className="absolute top-8 -left-44 bg-white p-5 rounded">
                <p>{userEmail}</p>
              <button type="button" onClick={logout} className="bg-red-500 mt-2 py-1 px-2 rounded text-white text-sm">Logout</button>
            </div>
          ) : (
            ""
          )}
          </div>
      
        </nav>
      </header>
    </div>
  );
}

export default Header;
