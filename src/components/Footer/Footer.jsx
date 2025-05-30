import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='p-4 bg-white sm:p-6 dark:bg-gray-800'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link to={"/"} className='flex items-center'>
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                NoteSwap
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Resources
              </h2>
              <ul className='text-gray-600 dark:text-gray-400'>
                <li className='mb-4'>
                  <Link to='/' className='hover:underline'>
                    NoteSwap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Follow us
              </h2>
              <ul className='text-gray-600 dark:text-gray-400'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/AboubakarArisar/NoteSwap-Frontend'
                    target='_blank'
                    className='hover:underline '
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-center w-full'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{" "}
            <a href='#' className='hover:undderline'>
              NoteSwap
            </a>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
