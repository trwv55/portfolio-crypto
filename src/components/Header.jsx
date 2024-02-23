/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

const Header = () => {
    const [logIn, setLogIn] = useState(true) 
  return (
    <div className='bg-blackMain border-b border-solid border-white'>
      <div className="container">
        <div className="py-6 flex justify-between items-center text-white">
            <a href="/">
                <h2 className='text-3xl'>Awesome Portfolio Crypto</h2>
            </a>
        <div>
            <a className='text-base hover:text-sky-600 transition-all' href="#">{logIn ? 'Log Out' : "Log In"}</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
