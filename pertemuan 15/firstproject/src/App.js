import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './page/Main';
import AboutHook from './page/AboutHook';
import GuestBook from './page/GuestBook';
import Faq from './page/Faq';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<AboutHook />} />
          <Route path="guestbook" element={<GuestBook />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;