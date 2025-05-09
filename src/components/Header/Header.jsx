import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
    if (user) {
      setLoggedInUser(true);
    } else {
      setLoggedInUser(false);
    }
  }, []);

  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap items-center justify-between max-w-screen-xl mx-auto'>
          <Link to='/' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              NoteSwap
            </span>
          </Link>
          <div className='flex items-center lg:order-2'>
            {loggedInUser ? (
              <div className='w-12 cursor-pointer h-12 rounded-full bg-transparent border-amber-50'>
                <img
                  src={`https://api.dicebear.com/9.x/initials/svg?seed=${user.username}`}
                  alt={`${user.username}'s avatar`}
                  onClick={() => navigate("/profile")}
                  className='rounded-full cursor-pointer border-amber-50'
                />
              </div>
            ) : (
              <>
                <Link
                  to='login'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                >
                  Login
                </Link>
                <button
                  data-collapse-toggle='mobile-menu-2'
                  type='button'
                  className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                  aria-controls='mobile-menu-2'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className='w-6 h-6'
                    fillRule='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <svg
                    className='hidden w-6 h-6'
                    fillRule='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </>
            )}
          </div>
          <div
            className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1'
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <Link
                  to='/'
                  className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/leaderboard'
                  className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  LeaderBoard{" "}
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
