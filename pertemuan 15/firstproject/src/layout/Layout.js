import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <main className='container'>
      <div className='row'>
        <header>
          <nav className='navbar navbar-expand-lg navbar-light mt-4 mb-4'>
            <a className='navbar-brand' href='/'>
              <img src="img/book-edu.png" alt="Logo" className="img-fluid" style={{ width: '25%' }} />
            </a>
            <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <NavLink to="/" className='nav-link' end>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/about" className='nav-link'>About</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/guestbook" className='nav-link'>Guest Book</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/faq" className='nav-link'>FAQ</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <Outlet />
    </main>
  );
}

export default Layout;