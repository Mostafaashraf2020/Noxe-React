import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function MasterLayout({ userData, logOut }) {
  return (
    <>
      <Navbar userData={userData} logOut={logOut} />
      <div className='container'>
        <Outlet></Outlet>
      </div>
    </>
  );
}
