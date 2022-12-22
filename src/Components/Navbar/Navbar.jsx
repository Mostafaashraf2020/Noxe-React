import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar({ userData, logOut }) {
  return (
    <nav className={`navbar navbar-expand-lg ${styles}`}>
      <div className='container-fluid'>
        <Link className='navbar-brand ' to=''>
          <h1>Noxe</h1>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon '></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          {userData ? (
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to=''>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='movies'>
                  Movies
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='tvshows'>
                  Tv Shows
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='pepole'>
                  People
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='about'>
                  About
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <div className='social-media d-flex align-items-center'>
              <i className='fab fa-facebook mx-2'></i>
              <i className='fab fa-spotify mx-2'></i>
              <i className='fab fa-instagram mx-2'></i>
              <i className='fab fa-youtube mx-2'></i>
            </div>
            {userData ? (
              <li className='nav-item'>
                <div className='d-flex align-items-center'>
                  <Link className='nav-link' to='profile'>
                    Happy Day, {userData.first_name} 😀{" "}
                  </Link>
                  <Link
                    className='nav-link btn btn-secondary ms-3 p-1'
                    onClick={logOut}
                  >
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <>
                <li className='nav-item'>
                  <Link
                    className='nav-link active'
                    aria-current='page'
                    to='login'
                  >
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='register'>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
